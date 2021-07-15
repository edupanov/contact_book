const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

router.post('',  UserController.getUsers)
router.post('/create',  UserController.createContact)
router.put('/update',  UserController.updateContact)

module.exports = router