const express = require("express");
const doctorListingController = require("../controllers/doctor_listings/doctor_listing_controller");

//http://localhost:8000/api/v1/doctors
const router = express.Router();

router.get("/", doctorListingController.listDoctors); //returns []

module.exports = router;
