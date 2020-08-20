import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './../actions/actionTypes';
import { auth, logout, authCheckState } from './auth';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, auth),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState),
        takeEvery(actionTypes.AUTH_LOGOUT, logout)
    ])
}