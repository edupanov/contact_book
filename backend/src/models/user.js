const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const AddressSchema = require('./address').addressSchema

const userSchema = new Schema({
    name: {type: String, require: true},
    surname: {type: String, require: true},
    patronymic: {type: String, require: true},
    birthDate: {type: String, require: true},
    gender: {type: String, require: true},
    maritalStatus: {type: String, require: true},
    nationality: {type: String, require: true},
    del: {type: String, require: true},
    edit: {type: String, require: true},
    addresses: [AddressSchema]
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = {userSchema, User}