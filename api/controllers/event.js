const EventSchema = require("./../models/event");
const fs = require("fs");
const ObjectId = require("mongoose").Types.ObjectId;
const helpers = require("./../helpers/utils");

const EventController = {};

EventController.addEvent = (req, res) => {
  const eventToAdd = new EventSchema({
    _id: ObjectId(),
    name: req.body.name,
    date: req.body.date,
    description: req.body.description
  });

  eventToAdd.save((err, eventAdded) => {
    if (err) return helpers.catchError(res, err);
    return res.status(200).json({ eventAdded: eventAdded });
  });
};

EventController.getEvents = (req, res) => {
  EventSchema.find().exec((err, result) => {
    if (err) return helpers.catchError(res, err);
    return res.status(200).json(result);
  });
};

EventController.getEvent = (req, res) => {
  EventSchema.findOne({ _id: ObjectId(req.params._id) }, (err, result) => {
    if (err) return helpers.catchError(res, err);
    return res.status(200).json(result);
  });
};

EventController.uploadEvent = (req, res) => {
  if (req.file && !req.file.path) {
    return res.status(500).json({ message: "Image not sent" });
  }

  EventSchema.findByIdAndUpdate(
    req.query.id,
    {
      imageUrl:
        (process.env.SERVER_DOMAIN || req.headers.host) + "/" + req.file.path
    },
    (err, updateResult) => {
      if (err) return helpers.catchError(res, err);
      else return res.status(200).json(true);
    }
  );
};

EventController.getEventById = (req, res) => {
  EventSchema.findById(req.params.id, (err, result) => {
    if (err) return helpers.catchError(res, err);
    return res.status(200).json(result);
  });
};

module.exports = EventController;
