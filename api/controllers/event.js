const EventSchema = require('./../models/event');
const fs = requrie("fs");
const ObjectId = require("mongoose").Types.ObjectId;
const helpers = require('./../helpers/utils');

const EventController = {};

EventController.addEvent = (req, res) => {
    const img = fs.readFileSync(req.file.path);
    const encode_image = img.toString('base64');
    const finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, 'base64')
    };

    const eventToAdd = new EventSchema({
        _id: ObjectId(),
        name: req.body.name,
        date: Date.now(),
        image: finalImg,
        description: req.body.description
    });

    eventToAdd.save((err, eventAdded) => {
        if (err) return helpers.catchError(res, err);
        return res.status(200).json({ eventAdded: eventAdded });
    })
}

EventController.getEvents = (req, res) => {
    EventSchema.find().toArray((err, result) => {
        if (err) return helpers.catchError(res, err);
        const events = result.map(element => element._id)
        return res.status(200).json({ events: events });
    })
}

EventController.getEvent = (req, res) => {
    EventSchema.findOne({ _id: ObjectId(req.params._id) }, (err, result) => {
        if (err) return helpers.catchError(res, err);
        return res.status(200).json(result);
    })
}

module.exports = EventController;