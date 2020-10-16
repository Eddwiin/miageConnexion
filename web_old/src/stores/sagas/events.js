import { put } from "redux-saga/effects";
import * as actions from './../actions';
import API from './../../helpers/api';

const getExtension = (file) => file.name.split('.')[file.name.split('.').length-1];

export function* addEvent(action) {
    const event = {
        title: action.payload.title,
        description: action.payload.description,
        date: new Date()
    }

    try {
        const response = yield API.post('/event/create', event);
        yield put(actions.addEventSuccess(response.data))
        yield put(actions.addOrUpdateEventImage({ eventId: response.data.eventId, file: action.payload.file}))

    } catch (error) {
        console.error(error);
        yield put(actions.addEventFail())
    }
}

export function* addOrUpdateEventImage(action) {
    // const extension = action.payload.file.name.split('.')[action.payload.file.name.split('.').length-1];
    const extension = getExtension(action.payload.file);

    try {
        const formData = new FormData();
        formData.append(
            "image",
            action.payload.file,
            `${action.payload.eventId}.${extension}`
        )
        
        const header = { headers: { 'Content-Type': 'multipart/form-data' } };
        const response = yield API.post("/event/upload", formData, header);
        yield put(actions.addOrUpdateEventImageSuccess(response));

    } catch (error) {
        console.error(error);
        yield put(actions.addEventImageFail())
    }
}

export function* getEvents(action) {
    try {
        const response = yield API.get("/event/all")
        yield put(actions.getEventsSuccess(response.data))
    } catch(error) {
        console.error(error);
    }
}

export function* updateEvent(action) {
    try {
        yield API.put("/event", action.payload);
        yield put(actions.updateEventSuccess(action.payload));
        yield put(actions.addOrUpdateEventImage(action.payload))
        
    } catch(error) {
        console.error(error);
    }
}