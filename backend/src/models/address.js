const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const addressSchema = new Schema({
    city: {type: String, require: true},
    country: {type: String, require: true},
    street: {type: String, require: true},
    building: {type: String, require: true},
    flat: {type: String, require: true},
    zipCode: {type: String, require: true}
}, {timestamps: true})

const Address = mongoose.model('Address', addressSchema)

module.exports = {addressSchema, Address}