const express = require('express');
const router = express.Router();
const {getLogs, addLogs, deleteLogs, updateLogs} = require('../controllers/logsController');

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.get('/', getLogs);
router.post('/', addLogs);
// router.get('/find/:query', searchLogs);



router.put(`/:id`, updateLogs);
router.delete(`/:id`, deleteLogs);

module.exports = router;