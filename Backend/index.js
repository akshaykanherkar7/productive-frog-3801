const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("server listening on port " + process.env.PORT);
});
