const express = require('express');
const helpers = require('../models/taskModel');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const data = req.body;
        const newTask = await helpers.insertTask(data);
        res.status(201).json(newTask)
    } catch (e) {
        next(e)
    }
});

router.get('/:id', async (req, res, next) => {
   try {
        const { id } = req.params;
        const tasks = await helpers.getById(id);
        res.status(200).json(tasks)
   } catch (e) {
       next(e)
   }
});

module.exports = router;
