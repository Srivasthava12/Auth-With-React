import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'react-router-redux';

import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_UNSUCCESS } from './constants';
import {SET_USER_INFO} from '../user/constants'

const endpoint = `http://projectzeros.com/users/authenticate`;

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
	try {
		const response = axios.post(endpoint, body, config);
		return response;
	} catch (ex) {
		if (ex && ex.response && ex.response.data && ex.response.data) throw ex.response.data.Errors;
		throw ex;
	}
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
