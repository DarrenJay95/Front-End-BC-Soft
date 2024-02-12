export interface BaseResponseModel<T> {
	ok: boolean;
	message: string;
	data: T;
	status?: number;
}