const express = require("express");
const {createUser, bookVisit, getAllBookings, cancelBooking, toFavorite, getAllFav} = require("../controllers/userController.js");
const router = express.Router();


router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBooking/:id", cancelBooking)
router.post("/toFav/:rid", toFavorite)
router.post("/allFav", getAllFav)





module.exports = router