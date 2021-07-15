const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

router.post('',  UserController.getUsers)
router.post('/create',  UserController.createContact)
router.post('/update',  UserController.updateContact)

module.exports = router