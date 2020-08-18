import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './../actions/actionTypes';
import { auth } from './auth';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, auth)
    ])
}