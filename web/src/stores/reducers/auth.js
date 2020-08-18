import * as actionTypes from './../actions/actionTypes';

const initialState = {
    access_token: null,
    userId: null
}

const authSuccess = (state, action) => {
    return {
        ...state,
        ...action
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);

        default:
            return state;
    }
}

export default authReducer;