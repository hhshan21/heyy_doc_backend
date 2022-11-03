const db = require("../../models");

const doc_appt_controller = {
  showAppointments: async (req, res) => {
    let appointments = null;
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }

    try {
      // search for all appointments based on user's id
      appointments = await db.booking.findAll({
        include: {
          model: db.user,
          as: "patient",
          attributes: ["firstName", "lastName", "drugAllergies"],
        },
        where: {
          doctorId: userAuth.data.userId,
        },
        order: [["bookingDate", "DESC"]],
      }); //cos the userAuth email is in an object when at login
      if (!appointments) {
        return res.status(404).json({ error: "appointment not found" });
      }

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

    try {
      const appointment = await db.booking.destroy({
        where: {
          id: appointmentId,
        },
      });
      return res.status(201).json("appointment deleted Successfully");
    } catch (err) {
      // return res.status(500).json({ error: "failed to delete appointment" });
      return res.status(500).json(err);
    }
  },
};

module.exports = doc_appt_controller;
