require("dotenv").config();

const express = require("express");
const cors = require("cors");
const doctorRouter = require("./routers/doctor_routes");
const userRouter = require("./routers/user_routes");

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

//  main pg
app.use("/api/v1");

// routes belonging to doctor
app.use("/api/v1/doctors", doctorRouter);

// routes belonging to user
app.use("/api/v1/user", userRouter);

// app.use("/api/v1/appointments", appointmentRouter); -> show appointment for doctors

app.listen(process.env.PORT, async () => {
  console.log(`Heyy Doc backend listening on port ${process.env.PORT}`);
});
