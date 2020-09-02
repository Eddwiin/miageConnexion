import * as actionTypes from './actionTypes';

export const addEvent = (payload) => ({
    type: actionTypes.ADD_EVENT,
    payload
})

export const addEventSuccess = (payload) => ({
    type: actionTypes.ADD_EVENT_SUCCESS,
    payload
})

export const addEventFail = () => ({
    type: actionTypes.ADD_EVENT_FAIL
})

export const addEventImage = (payload) => ({
    type: actionTypes.ADD_EVENT_IMAGE,
    payload
})

export const addEventImageSuccess = () => ({
    type: actionTypes.ADD_EVENT_IMAGE_SUCCESS,
})

export const addEventImageFail = () => ({
    type: actionTypes.ADD_EVENT_IMAGE_FAIL
})