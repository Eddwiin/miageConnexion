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

export const addOrUpdateEventImage = (payload) => ({
    type: actionTypes.ADD_OR_UPDATE_EVENT_IMAGE,
    payload
})

export const addOrUpdateEventImageSuccess = () => ({
    type: actionTypes.ADD_OR_UPDATE_EVENT_IMAGE_SUCCESS,
})

export const addEventImageFail = () => ({
    type: actionTypes.ADD_OR_UPDATE_EVENT_IMAGE_FAIL
})

export const getEvents = () => ({
    type: actionTypes.GET_EVENT,
})

export const getEventsSuccess = (payload) => ({
    type: actionTypes.GET_EVENT_SUCCESS,
    payload
})

export const updateEvent = (payload) => ({
    type: actionTypes.UPDATE_EVENT,
    payload
})

export const updateEventSuccess = (payload) => ({
    type: actionTypes.UPDATE_EVENT_SUCCESS,
    payload
})