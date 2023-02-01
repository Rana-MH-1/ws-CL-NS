const express = require('express');
const mongoose = require('mongoose');
const app = express()
const UserRouter = require('./Routes/UserRoute')
const dotenv = require('dotenv')
dotenv.config()


app.use(express.json())
app.use('/api/users', UserRouter )


mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI,err=> err? console.log(err) : console.log('DB is connected...'))

const PORT = process.env.PORT || 7000;
app.listen(PORT, err=> err? console.log(err) : console.log(`Server is running on port ${PORT}`))