const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv")
require('dotenv').config();
const app = express();
const port = process.env.PORT
import { userRoute } from "./route/userRoute";



//MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors());





app.use("/api/user", userRoute)










app.listen(port, ()=>{
    console.log(`This app is listening on port ${port}`);
})