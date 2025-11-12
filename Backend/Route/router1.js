const express = require('express');
const router = express.Router();

const {Home , Hello,getBook } = require('../Controller/control');




router.route('/').get(Home);
router.route('/hello').get(Hello);
router.route('/get').get(getBook);

module.exports = router;

