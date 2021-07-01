const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    surname: {type: String, require: true},
    patronymic: {type: String, require: true}
})

module.exports = mongoose.model('User', userSchema)