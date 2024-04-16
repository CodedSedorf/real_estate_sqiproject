const express = require("express");
import { createUser } from "../controllers/userController";
const router = express.Router();


router.post("/register", createUser)



export {router as userRoute}