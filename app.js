const express = require("express")
const dotenv=require("dotenv")
const morgan =require("morgan")
dotenv.config()
require("./config/db_setting")
const app=express()
app.use(morgan("dev"))
const rateLimit = require("express-rate-limit");
const apiLimiter = rateLimit({
  windowMs: 15* 60 * 1000, // 15 minutes
  max: 100
});
app.use(apiLimiter);
const userRoute=require("./routes/user_routes")
const driverRoute=require("./routes/driver_routes")
app.use(express.json())
app.use('/users',userRoute)
app.use('/drivers',driverRoute)



module.exports=app