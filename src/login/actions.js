import {LOGIN_REQUESTING} from './constants'

export const loginRequesting = ({ email, password }) => ({
	type: LOGIN_REQUESTING,
	email,
	password
});
