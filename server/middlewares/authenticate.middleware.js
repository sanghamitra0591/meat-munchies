const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });
};

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(400).send({
      message: "Authorization token was not provided or was not valid",
    });
  }
  const token = req.headers.authorization;
  let user;
  try {
    user = await verifyToken(token);
  } catch (e) {
    res.status(400).send({
      message: "Authorization token was not provided or was not valid",
    });
  }
  req.body.user_id = user.user._id;
  return next();
};
