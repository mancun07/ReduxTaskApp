const mongoose = require('mongoose');

const techsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim:true,
        required: true
    },
    lastName: {
        type: String,
        trim:true,
        required: true
    },

    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('tech', techsSchema);