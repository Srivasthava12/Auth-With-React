import { REGISTER_REQUESTING } from './constants';

export const registerRequesting = ({ name, email, userName, password }) => ({
	type: REGISTER_REQUESTING,
	name,
	email,
	userName,
	password
});
