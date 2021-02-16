const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
    message: {
        type: String,
        trim:true,
        required: true
    },
    tech: {
        type: String,
        trim:true,
        required: true
    },
    attention: {
        type: Boolean,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('log', logsSchema);