import { takeEvery, all } from 'redux-saga/effects';
import { logout, checkAuthTimeout, auth, authCheckState } from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, auth),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState),
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logout),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeout),
    ])

}