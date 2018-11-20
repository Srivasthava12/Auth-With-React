import axios from 'axios';

// export const apiHandle = (apiOptions) => {
// 	let response;
// 	switch (apiOptions.method) {
// 		case 'post': {
// 			try {
// 				response = axios.post(apiOptions.endpoint, apiOptions.body, apiOptions.config);
// 			} catch (ex) {
// 				if (ex && ex.response && ex.response.data && ex.response.data) throw ex.response.data.Errors;
// 				throw ex;
// 			}
// 			break;
// 		}
// 		default:
// 			break;
// 	}
// 	return response;
// };

export let apiHandle = function(apiOptions) {
	return new apiHandle.init(apiOptions);
};
apiHandle.prototype = {
	post: function() {
		let response;
		try {
			response = axios.post(this.endpoint, this.body, this.config);
		  return response;
		} catch (ex) {
			if (ex && ex.response && ex.response.data && ex.response.data) throw ex.response.data.Errors;
			throw ex;
		}
	}
};
apiHandle.init = function(apiOptions) {
	try {
		this.body = apiOptions.body || '';
		this.config = apiOptions.config;
		this.endpoint = apiOptions.endpoint;
	} catch (error) {
		console.log(error)
	}
};
apiHandle.init.prototype = apiHandle.prototype;
