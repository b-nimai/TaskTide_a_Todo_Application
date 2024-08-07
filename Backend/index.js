const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:5173',
    methods:["POST", "GET", "PUT", "DELETE"],
    credentials: true
}))
const port = 3000
const userRoute = require('./Routes/routes')
const mailRoute = require('./Routes/mailRoute')

app.use("/user", userRoute)
app.use("/mail", mailRoute)

app.get("/", (req, res) =>{
    res.send("Hello, Alright..")
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

module.exports = app;