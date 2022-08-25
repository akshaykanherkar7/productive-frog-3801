const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authentication = async (req, res, next) => {
  const user_token = req.headers.authorization.split(" ")[1];

  if (!user_token) {
    return res.status(511).send("Authentication Failed,Please Login");
  }

  await jwt.verify(user_token, process.env.jwt_secret_key, (err, decoded) => {
    if (err) {
      return res.status(511).send("Authentication Failed,Please Login");
    }
    req.body.userId = decoded.userId;
    next();
  });
};

module.exports = Authentication;
