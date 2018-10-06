import {
	REQUESTING_RESET_PASSWORD,
	SUCCESS_RESET_PASSWORD,
	UNSUCCESS_RESET_PASSWORD,
	ERROR_RESET_PASSWORD
} from './constants';
const initialState = {
	requesting: false,
	successful: false,
	messages: [],
	errors: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case REQUESTING_RESET_PASSWORD:
			return {
				requesting: true,
				successful: false,
				messages: [],
				errors: []
			};
		case SUCCESS_RESET_PASSWORD:
			return {
				requesting: false,
				successful: true,
				messages: [
					{
						body: `${action.response.data.msg}`
					}
				],
				errors: []
			};
		case UNSUCCESS_RESET_PASSWORD:
			return {
				requesting: false,
				successful: false,
				messages: [
					{
						body: `${action.response.data.msg}`
					}
				],
				errors: []
			};
		case ERROR_RESET_PASSWORD:
			return {
				successful: false,
				requesting: false,
				messages: [],
				errors: state.errors.concat([
					{
						body: action.error.toString()
					}
				])
			};
		default:
			return initialState;
	}
};
