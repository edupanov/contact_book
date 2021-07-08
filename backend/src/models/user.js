const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const UserSchema = new Schema({
    name: {type: String, require: true},
    surname: {type: String, require: true},
    patronymic: {type: String, require: true},
    birthDate: {type: String, require: true},
    gender: {type: String, require: true},
    maritalStatus: {type: String, require: true},
    nationality: {type: String, require: true},
    address: [{
        type: Schema.Types.ObjectId,
        ref: "Address"
    }]
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)