require("dotenv").config();

const express = require("express");
const cors = require("cors");
// const bookingRouter = require("./routers/booking_routes");
// const userRouter = require("./routers/user_routes");

const app = express();

app.get("/api/v1", (req, res) => {
  res.send("Heyy Doc!");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// app.use("/api/v1/doctors", bookingRouter);
// app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await console.log(
      `Heyy Doc backend is listening on port ${process.env.PORT}`
    );
  } catch (err) {
    console.log(`Failed to connect to DB`);
    process.exit(1);
  }
});
