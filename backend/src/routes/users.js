const express = require('express')
const UserController = require('../controllers/userController')
const extractFile = require('../middleware/file')
const multipart = require('connect-multiparty');

const multipartMiddleware = multipart({});

const router = express.Router()

router.post('', UserController.getContacts)
router.post('/create', UserController.createContact)
router.put('/update', multipartMiddleware, UserController.updateContact)
router.post('/delete', UserController.deleteContacts)
router.delete('/deleteAll', UserController.deleteAllContacts)
router.post('/sendEmails', UserController.sendEmails)
router.post('/addPhone', UserController.addPhone)
router.post('/removePhone', UserController.removePhone)

module.exports = router