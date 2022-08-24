const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const UserController = require("./Controllers/User.controller");
const { connection } = require("./Config/config");

app.get("/", async (req, res) => {
  return res.status(200).send("HomePage");
});

app.use("/user", UserController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connection established");
  } catch (err) {
    console.log(err);
  }
  console.log("server listening on port " + process.env.PORT);
});
