import { SET_USER_INFO, UNSET_USER_INFO } from './constants';

export const setUserInfo = (userInfo) => ({
	type: SET_USER_INFO,
	response: userInfo
});

export const unsetUserInfo = () => ({
	type: UNSET_USER_INFO
})
