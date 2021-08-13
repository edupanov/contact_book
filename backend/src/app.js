const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const usersRoutes = require('./routes/users')

const app = express()

const url = "mongodb+srv://Egor:" + process.env.MONGO_ATLAS_PW + "@myclaster.yoacx.mongodb.net/contacts?retryWrites=true&w=majority"

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        console.log('Connected to database!')
    })
    .catch((error) => {
        console.log('Connection failed!' + error)
    })

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use('/assets', express.static(path.join('backend/assets')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, '
    )
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
    next()
})

app.use('/api/contacts', usersRoutes)

module.exports = app