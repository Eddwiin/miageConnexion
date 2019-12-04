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
  EventSchema.find().toArray((err, result) => {
    if (err) return helpers.catchError(res, err);
    const events = result.map(element => element._id);
    return res.status(200).json({ events: events });
  });
};

EventController.getEvent = (req, res) => {
  EventSchema.findOne({ _id: ObjectId(req.params._id) }, (err, result) => {
    if (err) return helpers.catchError(res, err);
    return res.status(200).json(result);
  });
};

EventController.uploadEvent = (req, res) => {
  const img = fs.readFileSync(req.file.path);
  const encode_img = img.toString("base64");

  const finalImg = {
    contentType: req.file.mimetype,
    buffer: Buffer.from(encode_img, "base64")
  };

  EventSchema.findByIdAndUpdate(
    req.query.id,
    { image: finalImg },
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
