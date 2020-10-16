import * as actionTypes from './actionTypes';

export const authStart = () => ({
    type: actionTypes.AUTH_START
})

export const authFail = (error) => ({
    type: actionTypes.AUTH_FAIL,
    error
})

export const authSuccess = (payload) => ({
    type: actionTypes.AUTH_SUCCESS,
    payload
})

export const authUser = (payload) => ({
    type: actionTypes.AUTH_USER,
    payload
})

export const authCheckState = (payload) => ({
    type: actionTypes.AUTH_CHECK_STATE,
    payload
})

export const logout = () => ({
    type: actionTypes.AUTH_LOGOUT
})