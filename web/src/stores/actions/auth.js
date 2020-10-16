import * as actionsType from './actionsType';

export const authInit = () => ({ type: actionsType.AUTH_INIT });
export const authLoading = () => ({ type: actionsType.AUTH_LOADING });
export const authFail = (payload) => ({
    type: actionsType.AUTH_FAIL,
    payload
})
export const authSuccess = (payload) => ({
    type: actionsType.AUTH_SUCCESS,
    payload
})
export const authUser = () => ({ type: actionsType.AUTH_USER })