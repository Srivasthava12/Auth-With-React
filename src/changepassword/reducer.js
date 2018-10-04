import {
	REQUESTING_CHANGE_PASSWORD,
	SUCCESS_CHANGE_PASSWORD,
	UNSUCCESS_CHANGE_PASSWORD,
	ERROR_CHANGE_PASSWORD
} from './constants';
const initialState = {
	requesting: false,
	successful: false,
	messages: [],
	errors: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case REQUESTING_CHANGE_PASSWORD:
			return {
				requesting: true,
				successful: false,
				messages: [],
				errors: []
			};
		case SUCCESS_CHANGE_PASSWORD:
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
		case UNSUCCESS_CHANGE_PASSWORD:
			return {
				...state,
				requesting: false,
				successful: false,
				messages: [
					{
						body: `${action.response.data.msg}`
					}
				],
				errors: []
			};
		case ERROR_CHANGE_PASSWORD:
			return {
				...state,
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
			return state;
	}
};
