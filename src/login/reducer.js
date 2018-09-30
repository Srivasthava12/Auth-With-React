import { LOGIN_REQUESTING } from './constants';

const initialState = {
	requesting: false,
	successful: false,
	messages: [],
	errors: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUESTING:
			return {
				requesting: true,
				successful: false,
				messages: [],
				errors: []
			};

		default:
			return state;
	}
};
