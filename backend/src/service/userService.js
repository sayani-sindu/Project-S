const { default: isEmail } = require("validator/lib/isEmail");
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

const verifyUser = async (req) => {
  const { emailId, password } = req.body;
  if (!isEmail(emailId)) {
    throw new ApiError(401, "please input  valid email address");
  }
  console.log(emailId);
  try {
    const user = await getUserByEmail(emailId);
   
    if (!user) {
      throw new ApiError(404, "No user found");
    }

    const isvalidPassword = await user.comparePassword(password);
    if (!isvalidPassword) {
      throw new ApiError(401, "Password is Not Correct");
    }
    const token = await user.getJWT();
    
    return { token, user };
  } catch (error) {
    throw new Error("User not found" + error);
  }
};

const verifyToken = (token) => {
  try {
    const decodeObj = jwt.verify(token, "shhhh");
    return decodeObj;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { createUserService, verifyToken, verifyUser };
