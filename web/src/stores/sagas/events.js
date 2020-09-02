import { put } from "redux-saga/effects";
import * as actions from './../actions';
import API from './../../helpers/api';

export function* addEvent(action) {
    const event = {
        title: action.payload.title,
        description: action.payload.description,
        date: new Date()
    }

    try {
        const response = yield API.post('/event/create', event);
        yield put(actions.addEventSuccess(response.data))
        yield put(actions.addEventImage({ eventId: response.data.eventId, file: action.payload.file}))

    } catch (error) {
        console.error(error);
        yield put(actions.addEventFail())
    }
}

export function* addEventImage(action) {
    console.log("LOAD IMAGE ", URL.createObjectURL(action.payload.file))
    try {
        const formData = new FormData();
        formData.append(
            "files",
            action.payload.file,
            `event-${action.payload.eventId}`
        )
        const header = { headers: { 'Content-Type': 'multipart/form-data' } };
        const response = yield API.post("/files/upload", formData, header);
        yield put(actions.addEventImageSuccess());

    } catch (error) {
        console.error(error);
        yield put(actions.addEventImageFail())
    }
}