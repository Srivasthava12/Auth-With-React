import axios from 'axios';

export const apiHandle = (apiOptions) => {
	let response;
	switch (apiOptions.method) {
		case 'post': {
			try {
				response = axios.post(apiOptions.endpoint, apiOptions.body, apiOptions.config);
			} catch (ex) {
				if (ex && ex.response && ex.response.data && ex.response.data) throw ex.response.data.Errors;
				throw ex;
			}
			break;
		}
		default:
			break;
	}
	return response;
};
