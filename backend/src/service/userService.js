const { User } = require("../models/user");
const {
  createUser,
  getUserByEmail,
  findExistedUser,
} = require("../repositories/userRepo");
const { ApiError } = require("../utils/ApiError");
const { validateSignUpData } = require("../utils/validation");
const dotenv = require("dotenv");
dotenv.config();
const createUserService = async (data) => {
  try {
    const { firstName, lastName, emailId, password } = data.body;
    await validateSignUpData(data);
    const userExists = await findExistedUser(emailId);
    if (userExists) {
      throw new Error("User already Exists");
    }
    const user = await createUser({ firstName, lastName, emailId, password });
    const token = await user.getJWT();

    return { user, token };
  } catch (err) {
    console.log(err);
    return new ApiError(404, "user not created", err);
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

module.exports = { createUserService, verifyToken };
