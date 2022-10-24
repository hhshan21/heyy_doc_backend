const db = require("../../models");

const bookingController = {
  showBookings: async (req, res) => {
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
};

module.exports = bookingController;
