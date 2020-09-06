import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './../actions/actionTypes';
import { auth, logout, authCheckState } from './auth';
import { addEvent, getEvents, updateEvent, addOrUpdateEventImage } from './events';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, auth),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState),
        takeEvery(actionTypes.AUTH_LOGOUT, logout)
    ])
}

export function* watchEvent() {
    yield all([
        takeEvery(actionTypes.ADD_EVENT, addEvent),
        takeEvery(actionTypes.ADD_OR_UPDATE_EVENT_IMAGE, addOrUpdateEventImage),
        takeEvery(actionTypes.GET_EVENT, getEvents),
        takeEvery(actionTypes.UPDATE_EVENT, updateEvent)
    ])
}