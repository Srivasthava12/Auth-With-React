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

export var apiHandle = function(apiOptions) {
	return new apiHandle.init(apiOptions);
};
var response;
apiHandle.prototype = {
	post: function() {
		try {
			response = axios.post(this.endpoint, this.body, this.config);
		} catch (ex) {
			if (ex && ex.response && ex.response.data && ex.response.data) throw ex.response.data.Errors;
			throw ex;
		}
		return response;
	}
};
apiHandle.init = function(apiOptions) {
	this.body = apiOptions.body || '';
	this.config = apiOptions.config;
	this.endpoint = apiOptions.endpoint;
};
apiHandle.init.prototype = apiHandle.prototype;
