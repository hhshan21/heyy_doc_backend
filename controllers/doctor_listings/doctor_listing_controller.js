const db = require("../../models");

const doctorListingController = {
  listDoctors: async (req, res) => {
    let doctors = null;

    try {
      // TO DO explore a search function of doctors
      doctors = await db.user.findAll({
        where: {
          isDoctor: true,
        },
      });
      if (doctors.length === 0) {
        //find returns array
        return res.status(404).json({ error: "there are no doctors listed!" });
      }
      return res.json(doctors);
    } catch (err) {
      return res.status(500).json({ error: "failed to get doctors" });
    }
  },
};

module.exports = doctorListingController;
