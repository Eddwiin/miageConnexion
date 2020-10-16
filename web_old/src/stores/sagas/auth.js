import { put, call } from "redux-saga/effects";
import * as actions from './../actions';
import API from './../../helpers/api';

const TOKEN_NAME = "access_token"
const TOKEN_EXPIRATION = "token_expiration";

export function* auth(action) {
    yield put(actions.authStart());
    const user = {
        email: action.payload.email,
        password: action.payload.password
    }
    try {
        const response = yield API.post('/auth/login', user)
        yield call([localStorage, 'setItem'], TOKEN_NAME, response.data.access_token)
        yield call([localStorage, 'setItem'], TOKEN_EXPIRATION, response.data.token_expiration)
        const payload = { userId: response.data.userId }
        yield put(actions.authSuccess(payload))
    } catch (error) {
        console.error({ error })
        yield put(actions.authFail(error))
    }
}

export function* authCheckState(action) {
    const access_token = yield call([localStorage, 'getItem'], TOKEN_NAME);
    const token_expiration = yield call([localStorage, 'getItem'], TOKEN_EXPIRATION);

    if (!access_token || !token_expiration) {
        return yield put(actions.logout())
    }

    try {
        const response = yield API.get('/auth/profile', {
            headers: {
                "Authorization": `Bearer ${access_token}`
            }
        })
        if (!response) {
            put(actions.logout())
        } else {
            const payload = { userId: response.data.userId };
            yield put(actions.authSuccess(payload));
        }

    } catch (errors) {
        console.error(errors);
        yield put(actions.logout())
    }
}

export function* logout() {
    yield call([localStorage, 'removeItem'], TOKEN_NAME);
    yield call([localStorage, 'removeItem'], TOKEN_EXPIRATION);
    put(actions.logout())
}