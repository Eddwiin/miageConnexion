import { put, call } from 'redux-saga/effects';
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
        const response = yield API.post('/auth/login', user);
        yield call([localStorage, 'setItem'], TOKEN_NAME, response.data.access_token)
        yield call([localStorage, 'setItem'], TOKEN_EXPIRATION, response.data.expiration)
        yield put(actions.authSuccess())
    } catch (error) {
        yield put(actions.authFail(error))
    }

}

export function* logout(action) {
    yield call([localStorage, 'removeItem'], TOKEN_NAME)
    yield call([localStorage, 'removeItem'], TOKEN_EXPIRATION)
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeout() { }

export function* authCheckState(action) {
    const access_token = yield call([localStorage, 'getItem'], TOKEN_NAME);
    if (!access_token) {
        yield put(actions.logout())
    } else {
        console.log("testete");
        try {
            const response = yield API.get('/auth/profile', {
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })
            if (!response) {
                yield put(actions.logout())
            } else {
                yield put(actions.authSuccess(access_token));
            }
        } catch (error) {
            console.error(error);
            yield put(actions.logout())
        }
    }
}
