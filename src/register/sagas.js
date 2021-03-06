import { call, put, takeLatest } from 'redux-saga/effects';
import { REGISTER_REQUESTING, REGISTER_SUCCESS, REGISTER_UNSUCCESS, REGISTER_ERROR } from './constants';
import { SUCCESS_IN_REGISTER } from '../login/constants';
import { apiHandle } from '../helpers/apiHandle';
import { push } from 'react-router-redux';
import {con} from '../config/config'

function registerApi(name, email, userName, password) {
	const body = {
		name: name,
		email: email,
		userName: userName,
		password: password
	};
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const endpoint = `${con.url}/users/register`;

	const apiOptions = {
		body: body,
		config: config,
		endpoint: endpoint
	};

	return apiHandle(apiOptions).post();
}

// This will be run when the REGISTER_REQUESTING
// Action is found by the watcher
function* registerFlow(action) {
	try {
		const { name, email, userName, password } = action;
		const response = yield call(registerApi, name, email, userName, password);
		if (response.data.success) {
			localStorage.clear();
			yield put({ type: REGISTER_SUCCESS, response });
			yield put({ type: SUCCESS_IN_REGISTER, response });
			yield put(push('/login'));
		} else {
			yield put({ type: REGISTER_UNSUCCESS, response });
		}
	} catch (error) {
		yield put({ type: REGISTER_ERROR, error });
	}
}

// Watches for the REGISTER_REQUESTING action type
// When it gets it, it will call registerFlow()
// WITH the action we dispatched
function* registerWatcher() {
	// takeLatest() takes the LATEST call of that action and runs it
	// if we we're to use takeEvery, it would take every single
	// one of the actions and kick off a new task to handle it
	// CONCURRENTLY!!!
	yield takeLatest(REGISTER_REQUESTING, registerFlow);
}

export default registerWatcher;
