const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const AddressSchema = new Schema({
    city: {type: String, require: true},
    country: {type: String, require: true},
    street: {type: String, require: true},
    building: {type: String, require: true},
    flat: {type: String, require: true},
    zipCode: {type: String, require: true}
}, {timestamps: true})

module.exports = mongoose.model('Address', AddressSchema)