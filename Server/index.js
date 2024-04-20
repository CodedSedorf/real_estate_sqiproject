const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config();
const app = express();``
const port = process.env.PORT



//MIDDLEWARES
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());
app.use(cors());


const userRoute = require("../Server/route/userRoute");
const residencyRoute = require("../Server/route/residencyRoute");



app.use("/api/user", userRoute)

app.use("/api/residency", residencyRoute)










app.listen(port, ()=>{
    console.log(`This app is listening on port ${port}`);
})