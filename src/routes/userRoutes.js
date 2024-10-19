const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
router.post('/register', userController.signup);			
router.post('/login', userController.loginCheck);
router.get('/userscore',userController.getUserScore)
module.exports = router;