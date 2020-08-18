import { put, call } from "redux-saga/effects";
import * as actions from './../actions';
import API from './../../helpers/api';

const TOKEN_NAME = "access_token"
const TOKEN_EXPIRATION = "token_expiration";

export function* auth(action) {
    yield put(actions.authStart());
    const user = {
        email: action.email,
        password: action.password
    }

    try {
        const response = API.post('/auth/login', user)
        yield call([localStorage, 'setItem'], TOKEN_NAME, response.data.access_token)
        yield call([localStorage, 'setItem'], TOKEN_EXPIRATION, response.data.expiration)
        yield put(actions.authSuccess())
    } catch (error) {
        yield put(actions.authFail(error))
    }
}