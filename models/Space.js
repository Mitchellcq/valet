const mongoose = require('mongoose');

const SpaceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    formatted_address: {
        type: String,
        required: true,
    },
    types: Array,
    geometry: Object,
    open_now: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 5,
    },
    price_level: Number,
    cost: Number,
});

module.exports = mongoose.model('spaces', SpaceSchema);
