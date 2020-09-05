import * as actionTypes from '../actions/actionTypes';
import { updateObjState, updateArrState } from '../../helpers/reduxUtils';

const initialState = [] 

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_EVENT_SUCCESS:
            return updateObjState(state, action.payload);
        case actionTypes.ADD_EVENT_IMAGE_SUCCESS:
            return updateObjState(state, action.payload);
        case actionTypes.GET_EVENT_SUCCESS:
            return updateArrState(state, action.payload);
        // case actionTypes.UPDATE_EVENT_SUCCESS:
        //     return updateObjState(state, action.payload)
        default:
            return state;
    }
}

export default eventReducer;