const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const PhoneSchema = new Schema({
    countryCode: {type: String, required: true},
    operatorID: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    phoneType: {type: String, required: true},
    comment: {type: String, required: true}
}, {timestamps: true})

const Phone = mongoose.model('Phone', PhoneSchema)

module.exports = {Phone, PhoneSchema}