const multer = require("multer");
const multerLib = require("./../libs/multer");
const upload = multer({
  storage: multerLib({ urlToSave: "public/images/events" })
});

const EventController = require("./../controllers/event");

module.exports = app => {
  app.post("/private/addEvent", EventController.addEvent);
  app.get("/events", EventController.getEvents);
  app.get("/event/:id", EventController.getEvent);
  app.post(
    "/private/uploadEvent",
    upload.single("images"),
    EventController.uploadEvent
  );
};
