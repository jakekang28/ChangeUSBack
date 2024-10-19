const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quiz');


router.get('/data', quizController.loadQuiz)
router.get('/data/:id', quizController.loadDetail)

module.exports = router;