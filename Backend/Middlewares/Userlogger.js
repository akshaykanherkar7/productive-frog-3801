const Userlogger = (req, res, next) => {
  const email = req.body.email;
  const fullname = req.body.fullname;
  const password = req.body.password;
  const country = req.body.country;
  const currency = req.body.currency;
  if (email && fullname && password && country && currency) {
    next();
  } else {
    return res.status(404).send("All fields are required");
  }
};

module.exports = Userlogger;
