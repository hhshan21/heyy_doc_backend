require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");
// const listingRouter = require("./routers/listing_routes");
// const userRouter = require("./routers/user_routes");

const app = express();
const port = process.env.PORT || 8000;
const connStr = `postgres://${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DBNAME}`;
// const db = new Sequelize(‘postgres://localhost:5432/petOwners’);

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

app.listen(port, async () => {
  try {
    await connStr;
  } catch (err) {
    console.log(`Failed to connect to DB`);
    process.exit(1);
  }

  console.log(`Heyy Doc backend listening on port ${port}`);
});
