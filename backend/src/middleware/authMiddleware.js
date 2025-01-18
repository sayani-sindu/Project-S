const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { getUserByEmail } = require("../repositories/userRepo");
const { verifyToken } = require("../service/userService");
const { ApiResponse } = require("../utils/ApiResponse");
const userAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json(new ApiResponse(401, token, "User is not logged in"));
    }
    const decodeObj = verifyToken(token);
    const {userId} = decodeObj
    

    const user = await User.findById(userId);
    if (!user) {
      return res.json(new ApiResponse(404, null, "User not found"));
    }
    console.log(user)
    req.user = user;
    next();
  } catch (err) {
    console.error("Authentication Error");
    res.status(400).json(new ApiResponse(401, err, err.message));
  }
};
module.exports = {
  userAuth,
};
