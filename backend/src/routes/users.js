const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

router.post('',  UserController.getContacts)
router.post('/create',  UserController.createContact)
router.put('/update',  UserController.updateContact)
router.post('/delete',  UserController.deleteContacts)
router.delete('/deleteAll',  UserController.deleteAllContacts)

module.exports = router