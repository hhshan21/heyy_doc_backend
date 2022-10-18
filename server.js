require("dotenv").config();

const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
// const listingRouter = require("./routers/listing_routes");
// const userRouter = require("./routers/user_routes");

const app = express();
const port = process.env.PORT || 8000;
// const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}.nrg3u.mongodb.net/?retryWrites=true&w=majority`;

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

// app.use("/api/v1", listingRouter);
// app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`Heyy Doc backend listening on port ${port}`);
});

// app.listen(port, async () => {
//   try {
//     await mongoose.connect(connStr, { dbName: process.env.MONGO_DB });
//   } catch (err) {
//     console.log(`Failed to connect to DB`);
//     process.exit(1);
//   }

//   console.log(`Heyy Doc backend listening on port ${port}`);
// });
