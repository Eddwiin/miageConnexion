import * as actionTypes from './../actions/actionTypes';
import authReducer from './auth'

test('verify the default state of my initial state', () => {
    const newState = authReducer(undefined, {})
    expect(newState.access_token).toBe(null)
})

test('returns access_token if user is logged', () => {
    const mockAccessToken = "my mock";
    const mockUserId = "1234";
    const prevState = { 
        access_token: null,
        userId: null,
    }
    const action = {
        type: actionTypes.AUTH_SUCCESS,
        access_token: mockAccessToken,
        userId: mockUserId
    }
    const newState = authReducer(prevState, action)
    expect(newState.access_token).toBe(mockAccessToken);
    expect(newState.userId).toBe(mockUserId);
})