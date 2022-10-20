const express = require("express");

//http://localhost:8000/api/v1/doctors
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("Heyy doctor!");
});

module.exports = router;
