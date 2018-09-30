import { SET_USER_INFO } from './constants';

export const setUserInfo = (userInfo) => ({
	type: SET_USER_INFO,
	response: userInfo
});
