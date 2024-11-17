const { User } = require("../models/user");
const { createUser, getUserByEmail } = require("../repositories/userRepo");
const { validateSignUpData } = require("../utils/validation");
const dotenv = require("dotenv");
dotenv.config();
const createUserService = (data) => {
  const createService = async (data) => {
    try {
      const user = await createUser(data);
      return user;
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "something went wrong",
        data: {},
        success: false,
        err: error,
      });
    }
  };
};

const signUpValidation = (data) => {
  try {
    validateSignUpData(data);
  } catch (err) {
    throw new Error(err);
  }
};
const verifyToken = (token) => {
  try {
    const decodeObj = jwt.verify(token, JWT_SECRET_KEY);
    return decodeObj;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {createUserService,signUpValidation,verifyToken};
