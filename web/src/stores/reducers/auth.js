import * as actionsType from './../actions/actionsType'

const initialState = {
    userId: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsType.AUTH_SUCCESS:
            return {...state, ...action.payload}
        default: 
            return state;
    }
}

export default authReducer;