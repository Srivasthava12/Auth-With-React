import { REQUESTING_FORGOT_PASSWORD } from './constants';

export const requestingForgotPassword = ({  email }) => ({
	type: REQUESTING_FORGOT_PASSWORD,
	email,
});
