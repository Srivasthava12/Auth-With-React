import { REGISTER_REQUESTING, REGISTER_SUCCESS, REGISTER_UNSUCCESS, REGISTER_ERROR } from './constants';

const initialState = {
	requesting: false,
	successful: false,
	messages: [],
	errors: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_REQUESTING:
			return {
				...state,
				requesting: true
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				messages: [
					{
						body: `${action.response.data.msg}`
					}
				],
				successful: true
			};
		case REGISTER_UNSUCCESS:
			return {
				...state,
				messages: [
					{
						body: `${action.response.data.msg}`
					}
				]
			};
		case REGISTER_ERROR:
			return {
				...state,
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
