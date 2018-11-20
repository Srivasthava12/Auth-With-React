import { call, put, takeLatest } from 'redux-saga/effects';
import {
	REQUESTING_RESET_PASSWORD,
	SUCCESS_RESET_PASSWORD,
	UNSUCCESS_RESET_PASSWORD,
	ERROR_RESET_PASSWORD
} from './constants';
import { apiHandle } from '../helpers/apiHandle';
import jwtDecode from 'jwt-decode';
import {con} from '../config/config'

function resetPasswordApi(newPassword, index) {
	if (jwtDecode(index).exp < Date.now() / 1000) {
		return {
			data: {
				success: false,
				msg: 'Your session has expired'
			}
		};
	}
	const body = {
		newPassword: newPassword,
		token: index
	};
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const endpoint = `${con.url}/users/resetpassword`;

	const apiOptions = {
		body: body,
		config: config,
		endpoint: endpoint
	};
	return apiHandle(apiOptions).post();
}

function* resetPasswordFlow(action) {
	try {
		const params = new URL(document.location).search;
		const index = params.substring(7);
		const { newPassword } = action;
		const response = yield call(resetPasswordApi, newPassword, index);
		if (response.data.success) {
			yield put({ type: SUCCESS_RESET_PASSWORD, response });
		} else {
			yield put({ type: UNSUCCESS_RESET_PASSWORD, response });
		}
	} catch (error) {
		yield put({ type: ERROR_RESET_PASSWORD, error });
	}
}

function* resetPasswordWatcher() {
	yield takeLatest(REQUESTING_RESET_PASSWORD, resetPasswordFlow);
}

export default resetPasswordWatcher;
