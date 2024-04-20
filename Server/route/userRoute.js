const express = require("express");
const {createUser, bookVisit} = require("../controllers/userController.js");
const router = express.Router();


router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit)





module.exports = router