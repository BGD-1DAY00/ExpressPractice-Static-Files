const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(conn.name)
}

module.exports = {connectDB}