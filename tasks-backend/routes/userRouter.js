const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.use(authController.protect);

router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMyTasks', userController.updateTask);

module.exports = router;
