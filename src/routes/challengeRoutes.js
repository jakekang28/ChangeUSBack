
const express = require('express');
const router = express.Router();

const challengeController = require('../controllers/challenge')

router.get('/data', challengeController.loadChallenge)
router.get('/data/:id', challengeController.loadDetail)

module.exports = router