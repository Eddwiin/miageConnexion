import * as actionTypes from '../actions/actionTypes';

const initialState = {
    access_token: null,
}

const authSuccess = (state, action) => {
    return {
        ...state,
        access_token: action.access_token
    }
}

const authLogout = (state, action) => {
    return {
        ...state,
        access_token: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);

        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
            
        default:
            return state;
    }
}
export default reducer;