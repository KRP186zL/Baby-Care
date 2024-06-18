// routes/giziRoutes.js
const express = require('express');
const router = express.Router();
const giziController = require('../controller/giziController');

router.get('/gizi', giziController.getAllGizi);
router.get('/gizi/:id', giziController.getGiziById)

module.exports = router;
