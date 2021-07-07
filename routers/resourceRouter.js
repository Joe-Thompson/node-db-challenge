const express = require('express');
const helpers = require('../models/resourceModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await helpers.getResources();
        res.status(200).json(resources);
    } catch (e) {
        next(e)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const data = req.body;
        const newResource = await helpers.insertResource(data);
        res.status(201).json(newResource)
    } catch (e) {
        next(e)
    }
});

module.exports = router;
