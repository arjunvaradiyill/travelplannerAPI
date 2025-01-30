const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true,  // Ensure destination is required
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    activities: {
        type: Array,
        required: true,  // Ensure activities are required
    },
});

const Plan = mongoose.model('travels', planSchema);

module.exports = Plan;
