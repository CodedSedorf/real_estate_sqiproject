const express = require("express");
const cookieParser = require("cookie-parser");
// const cookie-parser = require("cookie-parser")
const app = express();
require("dotenv").config()
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


const usersRouter = require("../Servers/routes/userRoutes");
// app.use("/api", usersRouter)
app.use("/api", usersRouter);



app.get("/", (req, res)=>{
    res.send("Welcome to real-estate backend by dev sedorf")
})



app.listen(PORT, ()=>{
    console.log(`This app is listening on port ${PORT}`);
})