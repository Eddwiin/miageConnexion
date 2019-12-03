const multer = require("multer");
const helpers = require('./../helpers/utils');
const upload = multer({ storage: helpers.fileStorage() })

const EventController = require('./../controllers/event');

module.exports = app => {
    app.post('private/addEvent', upload.single('image'), EventController.addEvent);
    app.get("/private/events", EventController.getEvents);
    app.get("/private/event/:id", EventController.getEvent)
}