const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const auth = require('../middlewares/authorization.middleware')

router.post('/register', userController.createUser)

router.post('/login', userController.authenticateUser)

router.get('/user', auth, userController.returnUserInformation)

module.exports = router
