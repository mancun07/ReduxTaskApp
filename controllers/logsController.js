const Log = require('../model/logsModel')

const getLogs = async (req, res) => {
    try {
        const logs = await Log.find();

        res.status(200).json({
            success: true,
            count: logs.length,
            data: logs
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}

const searchLogs = async (req, res) => {
    try {
        // let query = req.params.query;
        const logs = await Log.customFilter(req.query)

        res.status(200).json({
            success: true,
            count: logs.length,
            data: logs
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}

const addLogs = async (req, res) => {
    try {
        const newLog = await Log.create(req.body);

        res.status(201).json({
            success: true,
            data: newLog
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}

const deleteLogs = async (req, res) => {
    try {
        const log = await Log.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            data: {}
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}

const updateLogs = async (req, res) => {
    try {
        const updatedLog = await Log.findByIdAndUpdate(req.params.id, {
            message: req.body.message,
            tech: req.body.tech,
            attention: req.body.attention
        }, {new: true});

        res.status(200).json({
            success: true,
            data: updatedLog
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}

module.exports = {
    getLogs,
    addLogs,
    deleteLogs,
    updateLogs,
    searchLogs
}