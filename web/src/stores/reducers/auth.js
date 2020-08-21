import * as actionTypes from './../actions/actionTypes';
import { updateState } from '../../helpers/reduxUtils';

const initialState = {
    userId: null,
}

const authSuccess = (state, action) => updateState(state, action.payload);
const logout = (state) => updateState(state, initialState);

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