import * as actionTypes from './../actions/actionTypes';
import authReducer from './auth'
import { logout } from '../actions/auth';

test('verify the default state of my initial state', () => {
    const newState = authReducer(undefined, {})
    expect(newState.access_token).toBe(null)
})

test('returns access_token if user is logged', () => {
    const mockAccessToken = "my mock";
    const mockUserId = "1234";
    const mockExpirationToken = "12/25/85"

    const prevState = {
        access_token: null,
        userId: null,
        expiration_token: null
    }
    const action = {
        type: actionTypes.AUTH_SUCCESS,
        access_token: mockAccessToken,
        userId: mockUserId,
        expiration_token: mockExpirationToken
    }
    const newState = authReducer(prevState, action)
    expect(newState.access_token).toBe(mockAccessToken);
    expect(newState.userId).toBe(mockUserId);
    expect(newState.expiration_token).toBe(mockExpirationToken)
})

test('Reset state of auth when user logout', () => {
    const prevState = {
        access_token: "fsdfdsfsd",
        userId: "58525511",
        expiration_token: "25/02/2021"
    }

    const action = { type: actionTypes.AUTH_LOGOUT }
    const newState = authReducer(prevState, action)
    expect(newState.access_token).toBeNull();
    expect(newState.userId).toBeNull();
    expect(newState.expiration_token).toBeNull();
})