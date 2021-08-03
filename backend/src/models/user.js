const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const AddressSchema = require('./address').addressSchema
const PhoneSchema = require('./phone').PhoneSchema
const AttachmentSchema = require('./attachment').AttachmentSchema

const userSchema = new Schema({
    name: {type: String, require: true},
    surname: {type: String, require: true},
    patronymic: {type: String, require: true},
    birthDate: {type: String, require: true},
    gender: {type: String, require: true},
    maritalStatus: {type: String, require: true},
    nationality: {type: String, require: true},
    currentJob: {type: String, require: true},
    email: {type: String, require: true},
    imagePath: {type: String, require: true},
    addresses: [AddressSchema],
    phones: [PhoneSchema],
    attachments: [AttachmentSchema],
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = {userSchema, User}