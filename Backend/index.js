const express = require('express')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const app = express()
const port = 3000
const userRoute = require('./Routes/routes')

app.use("/user", userRoute)

app.listen(port, ()=>{
    console.log(`App is starting at port: ${port}`)
})