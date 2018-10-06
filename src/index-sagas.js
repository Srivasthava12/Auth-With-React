import { all } from 'redux-saga/effects';

import RegisterSaga from './register/sagas';
import LoginSaga from './login/sagas'
import ForgotPasswordSaga from './forgotpassword/sagas'
import ChangePasswordSaga from './changepassword/sagas'
import ResetPasswordSaga from './resetpassword/sagas'

export default function* IndexSaga() {
	yield all([ RegisterSaga(), LoginSaga(),ForgotPasswordSaga(), ChangePasswordSaga(), ResetPasswordSaga() ]);
}
