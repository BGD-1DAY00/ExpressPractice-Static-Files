const express = require("express");
const {connectDB} = require('./db.js')
const app = express();
const path = require('path')
const dotenv = require('dotenv')
const router = require("./routes/routes.js");
const {logger} = require('./middleware/middleware.js')

connectDB()
dotenv.config({path: './config/config.env'})
app.use(logger)
app.use("/", router);
app.use(express.json())

const PORT = 5503;
app.listen(PORT, console.log("Running"));
