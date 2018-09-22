import { all } from 'redux-saga/effects';

import RegisterSaga from './register/sagas';

export default function* IndexSaga() {
	yield all([ RegisterSaga() ]);
}
