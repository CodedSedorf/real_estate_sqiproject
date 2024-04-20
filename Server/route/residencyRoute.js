const express = require("express");

const residencyRoute = express.Router()
const {createResidency, getAllResidencies, specificResident} = require("../controllers/residencyController")


residencyRoute.post("/create", createResidency);
residencyRoute.get("/allResidencies", getAllResidencies);
residencyRoute.get("/:id", specificResident)








module.exports = residencyRoute;