const express = require("express");
const userController = require("../controllers/users/user_controller");
// const bookingController = require("../controllers/bookings/booking_controller");
const authMiddleware = require("../middlewares/authmiddleware");
// const imageMethods = require("../middlewares/uploadImage/uploadImage");
// const multer = require("multer");
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
// const upload = multer();

//http://localhost:8000/api/v1/user
const router = express.Router();

router.post("/register", userController.register); // returns 201
router.post("/login", userController.login); // returns 201
router.post("/logout", userController.logout); // returns 201

//add authMiddleware is used for any route that needs authentication
// get and edit profile
router.get("/profile", authMiddleware, userController.showProfile); //returns {}
router.patch("/profile", authMiddleware, userController.editProfile); // returns 201

//get,create, edit, delete each booking
// router.get('/trips', authMiddleware, bookingController.showTrips)//returns []
// router.get('/trip/:booking_id', authMiddleware, bookingController.showTrip)//returns []
// router.post('/book/:listing_id', authMiddleware, bookingController.bookTrip)// returns 201
// router.patch('/trip/:booking_id', authMiddleware, bookingController.editTrip)// returns 201
// router.delete('/trip/:booking_id', authMiddleware, bookingController.deleteTrip)// returns 201

//get,create, edit, delete each listing
// router.get('/listings', authMiddleware, listingController.listHostListings)//returns []
// router.get('/listing/:listing_id', authMiddleware, bookingController.showListingBookings)//returns []
// router.post('/listing', authMiddleware, upload.any('files'), imageMethods.uploadImage, listingController.createListing)//return 201
// router.patch('/listing/:listing_id', authMiddleware, listingController.editListing)// returns 201
// router.delete('/listing/:listing_id', authMiddleware, listingController.deleteListing)// return 201
//  upload.array('file', 12),upload.single("file")validation(listingValidators.createListing)

module.exports = router;
