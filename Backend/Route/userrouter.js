const express = require('express');
const router = express.Router();

const {signup,login} = require('../Controller/UserController');

router.route("/signup").post(signup);
router.route("/log").post(login);

module.exports = router; 