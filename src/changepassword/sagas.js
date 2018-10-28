import { call, put, takeLatest } from 'redux-saga/effects';
import {
	REQUESTING_CHANGE_PASSWORD,
	SUCCESS_CHANGE_PASSWORD,
	UNSUCCESS_CHANGE_PASSWORD,
	ERROR_CHANGE_PASSWORD
} from './constants';
import { apiHandle } from '../helpers/apiHandle';

function changePasswordApi(oldPassword, newPassword) {
	const body = {
		oldPassword: oldPassword,
		newPassword: newPassword
	};
	const config = {
		headers: {
			Authorization: localStorage['token'].replace(/^"(.*)"$/, '$1'),
			'Content-Type': 'application/json'
		}
	};

	const endpoint = `http://projectzeros.com/users/changepassword`;

	const apiOptions = {
		body: body,
		config: config,
		endpoint: endpoint
	};

	return apiHandle(apiOptions).post();
}

function* changePasswordFlow(action) {
	try {
		const { oldPassword, newPassword } = action;
		const response = yield call(changePasswordApi, oldPassword, newPassword);
		console.log(response)
		if (response.data.success) {
			yield put({ type: SUCCESS_CHANGE_PASSWORD, response });
		} else {
			yield put({ type: UNSUCCESS_CHANGE_PASSWORD, response });
		}
	} catch (error) {
		yield put({ type: ERROR_CHANGE_PASSWORD, error });
	}
}

function* changePasswordWatcher() {
	yield takeLatest(REQUESTING_CHANGE_PASSWORD, changePasswordFlow);
}

export default changePasswordWatcher;
