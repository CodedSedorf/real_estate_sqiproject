const asyncHandler = require("express-async-handler");
import {prisma} from "../config/prismaConfig"

const createUser = asyncHandler(async (req, res) => {
    console.log("creating a user");
    let { email } = req.body;
    console.log(email); // Corrected: log the value of email variable
});

export {createUser}
