import axios, { AxiosError } from 'axios';
import { BaseResponseModel } from '../Dto';

class FetchFactory {
	private static instance: FetchFactory;

	public static getInstance(): FetchFactory {
		if (!FetchFactory.instance) FetchFactory.instance = new FetchFactory();
		return FetchFactory.instance;
	}

	public async fetch<ResponseType>(
		url: string,
		method: string,
		payload?: unknown,
		token?: string
	): Promise<BaseResponseModel<ResponseType>> {
		const Authorization = {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		};

		try {
			const result = await axios<BaseResponseModel<ResponseType>>({
				url,
				method,
				data: payload,
				params: {} as unknown,
				headers: token ? Authorization : undefined,
			});

			return result.data;
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				const axiosError = error as AxiosError<BaseResponseModel<ResponseType>>;

				return {
					ok: false,
					message: axiosError.response?.data.message || axiosError.message,
					data: axiosError.response?.data.data ?? ('' as ResponseType),
					status: axiosError.response?.status,
				};
			} else {
				return {
					ok: false,
					message: 'Service network failed',
					data: error as ResponseType,
				};
			}
		}
	}
}

export const Fetcher = FetchFactory.getInstance();
