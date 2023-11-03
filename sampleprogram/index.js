const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.listen(6000, async () => {
    console.log(`Server started at port no 6000`)
})
const employee = require('./employee')
app.use('/', employee)

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://vsaravana10697:6xwAtyFZmTYDc7lZ@cluster0.ifdfg7r.mongodb.net', err => {
    if (!err) {
        console.log('DB connected')
    } else {
        { console.log('error in db' + err) }
    }
})