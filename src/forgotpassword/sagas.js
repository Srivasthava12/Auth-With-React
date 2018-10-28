import { call, put, takeLatest } from 'redux-saga/effects';
import {
	REQUESTING_FORGOT_PASSWORD,
	SUCCESS_FORGOT_PASSWORD,
	UNSUCCESS_FORGOT_PASSWORD,
	ERROR_FORGOT_PASSWORD
} from './constants';
import { apiHandle } from '../helpers/apiHandle';

function forgotPasswordApi(email) {
	const body = {
		email: email
	};
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const endpoint = `http://projectzeros.com/users/forgotpassword`;

	const apiOptions = {
		body: body,
		config: config,
		endpoint: endpoint
	};

	return apiHandle(apiOptions).post();
}

function* forgotPasswordFlow(action) {
	try {
		const { email } = action;
		const response = yield call(forgotPasswordApi, email);
		if (response.data.success) {
			yield put({ type: SUCCESS_FORGOT_PASSWORD, response });
		} else {
			yield put({ type: UNSUCCESS_FORGOT_PASSWORD, response });
		}
	} catch (error) {
		yield put({ type: ERROR_FORGOT_PASSWORD, error });
	}
}

function* forgotPasswordWatcher() {
	yield takeLatest(REQUESTING_FORGOT_PASSWORD, forgotPasswordFlow);
}

export default forgotPasswordWatcher;
