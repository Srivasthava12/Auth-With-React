import { REGISTER_REQUESTING, REGISTER_SUCCESS, REGISTER_UNSUCCESS, REGISTER_ERROR } from './constants';

const initialState = {
	requesting: false,
	successful: false,
	messages: [],
	errors: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case REGISTER_REQUESTING:
			console.log('state :', state);
			return {
				requesting: true,
				successful: false,
				messages: [],
				errors: [],
			};
		case REGISTER_SUCCESS:
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
		case REGISTER_UNSUCCESS:
			console.log('state :', state);
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
		case REGISTER_ERROR:
			return {
				...state,
				successful: false,
				requesting: false,
				messages:[],
				errors: state.errors.concat([
					{
						body: action.error.toString()
					}
				])
			};

		default:
			return state;
	}
}
