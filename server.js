require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())

app.use(express.json())


//routes
app.use('/api/user', require('./routes/userRouter'))


//db connection

const connectDB = require("./config/connectDB");
connectDB();


const PORT = process.env.PORT || 5901 

app.listen(PORT, (error) => error
    ? console.error(error)
    : console.log(`server is running on port ${PORT}`)
)