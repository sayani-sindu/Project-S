const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { getUserByEmail } = require("../repositories/userRepo");
const { verifyToken } = require("../service/userService");
const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please login");
    }
    const decodeObj = verifyToken(token);
    const { emailID } = decodeObj;

    const user = getUserByEmail(emailID);
    req.user = user;
    next();
  } catch (err) {
    console.error("Authentication Error");
    res.status(401).send("error" + err.message);
  }
};
module.exports = {
  userAuth,
};
