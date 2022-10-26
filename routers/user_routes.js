const express = require("express");
const userController = require("../controllers/users/user_controller");
const bookingController = require("../controllers/bookings/booking_controller");
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

// add authMiddleware is used for any route that needs authentication
// get and edit user's profile
router.get("/profile", authMiddleware, userController.showProfile); //returns {}
router.patch("/profile", authMiddleware, userController.editProfile); // returns 201

// get,create, edit, delete each booking (patient view)
router.get("/bookings", authMiddleware, bookingController.showBooking); //returns []
router.post("/bookings", authMiddleware, bookingController.createBooking); // returns 201
router.patch("/bookings/:id", authMiddleware, bookingController.editBooking); // returns 201
router.delete("/bookings/:id", authMiddleware, bookingController.deleteBooking); // returns 201

//get,create, edit, delete each appointment (doctor only)
router.get("/appointments", authMiddleware, bookingController.showAppointments); //returns []
router.delete(
  "/appointments/:id",
  authMiddleware,
  bookingController.deleteAppointments
); // return 201
// router.post('/listing', authMiddleware, upload.any('files'), imageMethods.uploadImage, listingController.createListing)//return 201
//  upload.array('file', 12),upload.single("file")validation(listingValidators.createListing)

module.exports = router;
