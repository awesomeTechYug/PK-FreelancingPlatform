const express = require('express');
const router = express.Router();
const joblistcontroller = require('./../controllers/joblistingcontrollers');


router
  .route('/')
  .get(joblistcontroller.getjobsdata);

module.exports = router;
