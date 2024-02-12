import { Mutex } from 'async-mutex';
import { Fetcher } from './FetchFactory';
import { BASE_URL, ENDPOINTS } from '../Endpoints';
import { UserModel } from '../Dto';
import { Auth } from '../Observer/AuthObserver';

const mutex = new Mutex();

export const ApiCall = async <ResponseType>(
	url: string,
	method: 'POST' | 'GET',
	data?: unknown
) => {
	const token = Auth.getSelector('token');
	const result = await Fetcher.fetch<ResponseType>(`${BASE_URL}${url}`, method, data, token);
	if (!result.ok && result.status === 401) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire();
			const refreshToken  =  Auth.getSelector('refreshToken');
			const reAuth = await Fetcher.fetch<UserModel>(
				`${BASE_URL}${ENDPOINTS}`,
				'POST',
				{
					accessToken: token,
					refreshToken: refreshToken,
				}
			);
			if (!reAuth.ok) {
				Auth.reset();
				return result;
			}
			const newFetchData = await Fetcher.fetch<ResponseType>(
				`${BASE_URL}${url}`,
				method,
				data,
				reAuth.data.auth.token
			);

			release();
			return newFetchData;
		} else {
			await mutex.waitForUnlock();
			const token = Auth.getSelector('token');
			const newFetchData = await Fetcher.fetch<ResponseType>(
				`${BASE_URL}${url}`,
				method,
				data,
				token
			);

			return newFetchData;
		}
	}

	return result;
};
