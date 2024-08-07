const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3000
const userRoute = require('./Routes/routes')
const mailRoute = require('./Routes/mailRoute')

app.use("/user", userRoute)
app.use("/mail", mailRoute)

app.get("/", (req, res) =>{
    res.send("Hello, Alright..")
})

module.exports = app;