import { put, call } from "redux-saga/effects";
import * as actions from './../actions';
import API from './../../helpers/api';

const TOKEN_NAME = "access_token"
const TOKEN_EXPIRATION = "token_expiration";

function* clearLocalstorage() {
    yield call([localStorage, 'removeItem'], TOKEN_NAME);
    yield call([localStorage, 'removeItem'], TOKEN_EXPIRATION);
}

export function* auth(action) {
    yield put(actions.authStart());
    const user = {
        email: action.email,
        password: action.password
    }

    try {
        const response = yield API.post('/auth/login', user)
        console.log({ response })
        yield call([localStorage, 'setItem'], TOKEN_NAME, response.data.access_token)
        yield call([localStorage, 'setItem'], TOKEN_EXPIRATION, response.data.expiration)
        yield put(actions.authSuccess())
    } catch (error) {
        console.error({ error })
        yield put(actions.authFail(error))
    }
}

export function* authCheckState() {
    const access_token = yield call([localStorage, 'getItem'], TOKEN_NAME);

    if (!access_token) {
        return yield put(actions.logout())
    }
    try {
        const response = yield API.get('/auth/profile', {
            headers: {
                "Authorization": `Bearer ${access_token}`
            }
        })
        if (!response) {
            yield clearLocalstorage();
            put(actions.logout())
        } else {
            console.log({ response })
            yield put(actions.authSuccess());
        }
    } catch (errors) {
        console.error(errors);
        yield clearLocalstorage()
        yield put(actions.logout())
    }
}

export function* logout() {
    yield clearLocalstorage();
    put(actions.logout())
}