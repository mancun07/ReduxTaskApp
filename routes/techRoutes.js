const express = require('express');
const router = express.Router();

const {getTechs, addTechs, deleteTechs} = require('../controllers/techsController');

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.get('/', getTechs)
router.post('/', addTechs)


router.delete('/:id', deleteTechs)

module.exports = router;