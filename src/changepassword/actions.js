import { REQUESTING_CHANGE_PASSWORD } from './constants';

export const requestingChangePassword = ({  oldPassword, newPassword }) => ({
	type: REQUESTING_CHANGE_PASSWORD,
	oldPassword,
	newPassword
});
