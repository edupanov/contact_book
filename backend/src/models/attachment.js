const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const AttachmentSchema = new Schema({
    uploadDate: {type: String, require: true},
    comment: {type: String, require: true},
    filePath: {type: String, require: true},
    fileName: {type: String, require: true},

}, {timestamps: true})

const Attachment = mongoose.model('Attachment', AttachmentSchema)

module.exports = {AttachmentSchema, Attachment}