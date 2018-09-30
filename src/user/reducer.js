import { SET_USER_INFO } from './constants.js';
const initialState = {
	userInfo: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			return { userInfo: action.response };

		default:
			return state;
	}
};
