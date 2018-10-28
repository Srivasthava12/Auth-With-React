import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { apiHandle } from '../helpers/apiHandle';
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_UNSUCCESS } from './constants';
import {SET_USER_INFO} from '../user/constants'



function loginApi(email, password) {
	const body = {
		email: email,
		password: password
	};
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const endpoint = `http://projectzeros.com/users/authenticate`;
	const apiOptions = {
		body: body,
		config: config,
		endpoint: endpoint
	};
	
	 return apiHandle(apiOptions).post();
}

function* loginFlow(action) {
	try {
		const { email, password } = action;
		const response = yield call(loginApi, email, password);
		if (response.data.success) {
			localStorage['token'] = JSON.stringify(response.data.token);
			localStorage['user'] = JSON.stringify(response.data.user);
			yield put({ type: LOGIN_SUCCESS, response });
			yield put({ type: SET_USER_INFO, response:response.data.user });
			yield put(push('/profile'));
		} else {
			yield put({ type: LOGIN_UNSUCCESS, response });
		}
	} catch (error) {
		yield put({ type: LOGIN_ERROR, error });
	}
}

function* loginWatcher() {
	yield takeLatest(LOGIN_REQUESTING, loginFlow);
}

export default loginWatcher;
