import * as actionTypes from './../actions/actionTypes';

const initialState = {
    access_token: null,
    userId: null,
    expiration_token: null
}

const authSuccess = (state, action) => {
    return {
        ...state,
        ...action
    }
}

const logout = (state) => {
    return {...state, ...initialState}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);

        case actionTypes.AUTH_LOGOUT:
            return logout(state);

        default:
            return state;
    }
}

export default authReducer;