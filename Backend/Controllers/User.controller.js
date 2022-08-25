const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserController = express.Router();

const UserModel = require("../Models/User.model");
const Userlogger = require("../Middlewares/Userlogger");

UserController.post("/register", Userlogger, async (req, res) => {
  const { email, fullname, password, country, currency } = req.body;

  await bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      return res.status(500).send("Error in Password hash calculation");
    }
    const user = new UserModel({
      email,
      fullname,
      password: hash,
      country,
      currency,
    });
    await user.save();
    return res
      .status(200)
      .send({ message: "Registration successfull", user: user });
  });
});

UserController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  console.log("user:", user);
  if (!user) {
    return res.status(501).send("Login Failed, User Not Found!");
  }
  const hashed_password = user.password;
  await bcrypt.compare(password, hashed_password, function (err, result) {
    if (err) {
      return res.status(500).send("Error in Password hash calculation");
    }
    if (result) {
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        process.env.jwt_secret_key
      );
      return res.status(200).send({ message: "Login Success", token: token });
    } else {
      return res.status(401).send({ message: "Invalid Credentials" });
    }
  });
});

module.exports = UserController;
