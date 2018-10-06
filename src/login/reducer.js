import {
	LOGIN_REQUESTING,
	SUCCESS_IN_REGISTER,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGIN_UNSUCCESS,
	LOGOUT_SUCCESSFUL
} from './constants';

const initialState = {
	requesting: false,
	successful: false,
	messages: [],
	errors: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_IN_REGISTER:
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
		case LOGIN_REQUESTING:
			return {
				requesting: true,
				successful: false,
				messages: [],
				errors: []
			};
		case LOGIN_SUCCESS:
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
		case LOGIN_UNSUCCESS:
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
		case LOGIN_ERROR:
			return {
				requesting: false,
				successful: false,
				messages: [],
				errors: state.errors.concat([
					{
						body: action.error.toString()
					}
				])
			};

		case LOGOUT_SUCCESSFUL:
			return {
				requesting: false,
				successful: false,
				messages: [
					{
						body: `${action.message}`
					}
				],
				errors: []
			};

		default:
			return initialState;
	}
};
