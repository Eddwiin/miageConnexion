const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    _id: String,
    name: String,
    date: Date,
    image: {
        contentType: String,
        buffer: Buffer
    },
    description: String
});

module.exports = mongoose.model('Event', EventSchema)