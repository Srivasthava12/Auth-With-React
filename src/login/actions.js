import {LOGIN_REQUESTING, LOGOUT_SUCCESSFUL} from './constants'

export const loginRequesting = ({ email, password }) => ({
	type: LOGIN_REQUESTING,
	email,
	password
});

export const logoutSuccessful = (message) => ({
	type: LOGOUT_SUCCESSFUL,
	message
}) 
