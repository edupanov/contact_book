const multer = require('multer')

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
    'application/msword': 'doc',
    'application/pdf': 'pdf',
}

const storage = multer.diskStorage({
    destination: (req, files, cb) => {
        console.log(files)
        const isValid = MIME_TYPE_MAP[files.mimetype]
        let error = new Error('Invalid mime type')
        if (isValid) {
            error = null
        }
        cb(null, 'backend/src/attachments') // относительно server.js
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-')
        const ext = MIME_TYPE_MAP[file.mimetype]
        cb(null, name + '-' + Date.now() + '.' + ext)
    }
})

module.exports = () => multer({storage: storage}).array('images')