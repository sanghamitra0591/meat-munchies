const express = require("express");
const { connection } = require("./configs/db");
const { productRouter } = require("./routes/Product.route");
const { userRouter } = require("./routes/User.route");

const app = express();

app.use(express.json());

require("dotenv").config();

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.use("/api/auth", userRouter);

app.use("/product", productRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log({ error: error });
  }
  console.log(`Running at port ${process.env.port}`);
});
