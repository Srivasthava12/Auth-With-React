import { all } from 'redux-saga/effects';

import RegisterSaga from './register/sagas';
import LoginSaga from './login/sagas'

export default function* IndexSaga() {
	yield all([ RegisterSaga(), LoginSaga() ]);
}
