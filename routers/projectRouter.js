const express = require('express');
const helpers = require('../models/projectModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
   try {
       const projects = await helpers.getProjects();
       res.status(200).json(projects);
   } catch (e) {
       next(e)
   }
});

module.exports = router;
