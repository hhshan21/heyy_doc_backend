const db = require("../../models");

const bookingController = {
  showBooking: async (req, res) => {
    let bookings = null;
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    console.log("userAuth: ", userAuth);
    console.log("userAuth.data.userId: ", userAuth.data.userId);
    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }

    try {
      // search for all bookings based on user's id
      bookings = await db.booking.findOne({
        include: { model: db.user },
        where: {
          patientId: userAuth.data.userId,
        },
      }); //cos the userAuth email is in an object when at login
      if (!bookings) {
        return res.status(404).json({ error: "bookings not found" });
      }
      console.log("bookings: ", bookings);
      return res.json(bookings);
    } catch (err) {
      // return res.status(500).json({ error: "failed to get booking" });
      return res.status(500).json({ err });
    }
  },

  createBooking: async (req, res) => {
    //const listingId = "6316fda9d2571d6d3e58aef6"
    const listingId = req.params.listing_id; //take from FE link\
    console.log(listingId);
    const booked_by = res.locals.userAuth.data.userId;
    //const booked_by = "630f9ca501b6bed58f47cee5"; //take from res.local auth?
    let booking = null;
    let listing = null;
    const dateRangeArray = dateMethods.getDatesInRange(
      req.body.checkin_date,
      req.body.checkout_date
    );
    console.log("----->", dateRangeArray);

    //mongoose will change string date to the iso date in dbs
    try {
      booking = await bookingModel.create({
        ...req.body,
        listing: listingId,
        booked_by,
      });
      if (!booking) {
        return res.status(404).json({ error: "Booking not found " });
      }
      listing = await listingModel.findOneAndUpdate(
        { _id: listingId },
        { $push: { unavailable_dates: dateRangeArray } },
        { new: true }
      );
      if (!listing) {
        return res.status(404).send("Unable to find listing");
      }
      return res.status(201).send("Booking Created Successfully");
    } catch (error) {
      return res.status(500).json({ error: "failed to create booking" });
    }
  },

  editBooking: async (req, res) => {
    let user = null;
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }

    try {
      await db.user.update(
        { ...req.body },
        {
          where: {
            email: userAuth.data.email,
          },
        }
      );
      return res.status(200).json("Profile edited");
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }
  },

  deleteBooking: async (req, res) => {
    const bookingId = req.params.booking_id; //taken from FE <link>
    let booking = null;
    let listing = null;

    try {
      booking = await bookingModel.findById(bookingId).populate("listing");
      if (!booking) {
        return res.status(404).json({ error: "Booking not found " });
      }

      let idx = booking.listing.unavailable_dates.findIndex((element) => {
        return element[0].toString() == booking.checkin_date.toString();
      });

      listing = await listingModel.findByIdAndUpdate(
        { _id: booking.listing._id },
        {
          $pull: { unavailable_dates: booking.listing.unavailable_dates[idx] },
        },
        { new: true }
      );
      if (!listing) {
        return res.status(404).json({ error: "Listing not found " });
      }
      console.log("------->", listing);

      await bookingModel.findByIdAndDelete(bookingId);

      return res.status(201).json("booking deleted Successfully");
    } catch (error) {
      return res.status(500).json({ error: "failed to delete booking" });
    }
  },
};

module.exports = bookingController;
