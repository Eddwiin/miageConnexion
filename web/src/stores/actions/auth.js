import * as actionTypes from './actionTypes';

export const authStart = () => ({
    type: actionTypes.AUTH_START
})

export const authFail = (error) => ({
    type: actionTypes.AUTH_FAIL,
    error
})

export const authSuccess = (userId, access_token, expiration_token) => ({
    type: actionTypes.AUTH_SUCCESS,
    access_token,
    userId,
    expiration_token
})

export const authUser = (email, password) => ({
    type: actionTypes.AUTH_USER,
    email,
    password
})

export const authCheckState = () => ({
    type: actionTypes.AUTH_CHECK_STATE
})

export const logout = () => ({
    type: actionTypes.AUTH_LOGOUT
})