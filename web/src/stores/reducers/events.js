import * as actionTypes from '../actions/actionTypes';
import { updateObjState } from '../../helpers/reduxUtils';

const initialState = [
    {
        eventId: null,
        title: null,
        description: null,
        date: null
    }
]

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_EVENT_SUCCESS:
            return updateObjState(state, action.payload)
        case actionTypes.ADD_EVENT_IMAGE_SUCCESS:
            return updateObjState(state, action.payload)
        default:
            return state;
    }
}

export default eventReducer;