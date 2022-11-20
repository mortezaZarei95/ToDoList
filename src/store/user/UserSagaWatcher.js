import { takeEvery } from 'redux-saga/effects';
import * as userAction from './UserAction';
import * as userSaga from './UserSaga';


export function* userWatcher() {
    yield takeEvery(
        userAction.GET_USER,
        userSaga.getUserSagas
    )
}