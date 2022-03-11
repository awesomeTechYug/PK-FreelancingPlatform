const express= require('express');
const router = express.Router();
const logincontroller = require('./../controllers/logincontrollers');

router
  .route('/')
  .get(logincontroller.login)
  .post(logincontroller.logindetails);

module.exports = router;
