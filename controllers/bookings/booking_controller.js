const db = require("../../models");

const bookingController = {
  showBooking: async (req, res) => {
    let bookings = null;
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }

    try {
      // search for all bookings based on user's id
      bookings = await db.booking.findAll({
        include: { model: db.user },
        where: {
          patientId: userAuth.data.userId,
        },
      }); //cos the userAuth email is in an object when at login
      if (!bookings) {
        return res.status(404).json({ error: "bookings not found" });
      }

      return res.json(bookings);
    } catch (err) {
      return res.status(500).json({ error: "failed to get booking" });
    }
  },

  createBooking: async (req, res) => {
    try {
      const { patientId, doctorId, bookingAt, startAt, endAt } = req.body;
      const [booking, created] = await db.booking.findOrCreate({
        where: {
          patientId,
          doctorId,
          bookingAt,
          startAt,
          endAt,
        },
        defaults: {
          ...req.body,
        },
      });
      if (created) {
        return res.status(201).json("Booking Created Successfully");
      } else {
        return res.status(201).json("Booking already exists");
      }
    } catch (err) {
      return res.status(500).json({ err: "Failed to create new booking" });
    }
  },

  editBooking: async (req, res) => {
    // TO FIX THIS ROUTE
    const bookingId = req.params.id; //take from FE link
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }
    console.log("bookingId: ", bookingId);

    try {
      await db.user.update(
        { ...req.body },
        {
          where: {
            id: bookingId,
          },
        }
      );

      return res.status(200).json("Booking edited");
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  deleteBooking: async (req, res) => {
    const bookingId = req.params.id; //take from FE link
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }

    try {
      const booking = await db.booking.destroy({
        where: {
          id: bookingId,
        },
      });
      return res.status(201).json("booking deleted Successfully");
    } catch (err) {
      return res.status(500).json({ error: "failed to delete booking" });
    }
  },

  showAppointments: async (req, res) => {
    // TO FIX THIS ROUTE to show patient info
    let appointments = null;
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }

    console.log("userAuth: ", userAuth);

    try {
      // search for all appointments based on user's id
      appointments = await db.booking.findAll({
        include: { model: db.user },
        where: {
          doctorId: userAuth.data.userId,
        },
      }); //cos the userAuth email is in an object when at login
      if (!appointments) {
        return res.status(404).json({ error: "appointments not found" });
      }
      // console.log("db.user: ", db.user);
      console.log("appointments: ", appointments);
      return res.json(appointments);
    } catch (err) {
      // return res.status(500).json({ error: "failed to get appointments" });
      return res.status(500).json(err);
    }
  },

  deleteAppointments: async (req, res) => {
    const appointmentId = req.params.id; //take from FE link
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }

    console.log("appointmentId: ", appointmentId);

    try {
      const appointment = await db.booking.destroy({
        where: {
          id: appointmentId,
        },
      });
      console.log("appointment: ", appointment);
      return res.status(201).json("appointment deleted Successfully");
    } catch (err) {
      // return res.status(500).json({ error: "failed to delete appointment" });
      return res.status(500).json(err);
    }
  },
};

module.exports = bookingController;
