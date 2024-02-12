const getBeUrl = () => {
	const mode = import.meta.env.MODE;
	if (mode == 'qa') return 'https://ppfbeapiqa.azurewebsites.net';
	if (mode == 'prod') return '';

	//Development mode
	return 'https://ppfbeapi.azurewebsites.net';
};
export const BASE_URL = getBeUrl();

export const ENDPOINTS = {

};