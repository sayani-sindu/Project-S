const User = require("../models/user");
const ApiError = require("../utils/ApiError");

const createUser = async (data) => {
  try {
    const user = new User(data);
    await user.save();
    return user;
  } catch (error) {
    throw new ApiError("Error creating user: " + error.message);
  }
};

const getUserByEmail = async (emailID) => {
  try {
    const user = await User.findOne({ emailID });
    if (!user) {
      throw new ApiError("User not found with this email");
    }
    return user;
  } catch (error) {
    throw new ApiError("Error finding user: " + error.message);
  }
};

module.exports = {
  createUser,
  getUserByEmail,
};
