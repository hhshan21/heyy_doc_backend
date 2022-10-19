require("dotenv").config();

const express = require("express");
const cors = require("cors");
// const listingRouter = require("./routers/listing_routes");
// const userRouter = require("./routers/user_routes");

const app = express();

app.get("/", (req, res) => {
  res.send("Heyy Doc!");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// app.use("/api/v1"); -> main pg
// app.use("/api/v1/doctors", doctorRouter); -> show list of doctors
// app.use("/api/v1/user", userRouter); -> make bookings with doctors, profile
// app.use("/api/v1/appointments", appointmentRouter); -> show appointment for doctors

app.listen(process.env.PORT, async () => {
  console.log(`Heyy Doc backend listening on port ${process.env.PORT}`);
});
