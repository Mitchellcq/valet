const mongoose = require('mongoose');

const SpaceSchema = new mongoose.Schema({
    userID: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    available: {
        type: Boolean,
    },
});

module.exports = mongoose.model('spaces', SpaceSchema);
