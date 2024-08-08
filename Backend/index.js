const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors());
app.use(cors({
    origin: 'https://task-tide-six.vercel.app',
    methods:'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
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

process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    // Application specific logging, throwing an error, or other logic here
    process.exit(1); // Recommended to restart the process
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
  

module.exports = app;