import { REQUESTING_RESET_PASSWORD } from './constants';

export const requestingResetPassword = ({   newPassword }) => ({
	type: REQUESTING_RESET_PASSWORD,
	newPassword
});
