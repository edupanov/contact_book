const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

router.get('/page/:page/take/:take', UserController.getUsers)

module.exports = router