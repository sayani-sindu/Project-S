const User = require("../models/user");
const { ApiError } = require("../utils/ApiError");

const createUser = async ({ firstName, lastName, emailId, password }) => {
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      emailId,
      password,
    });
    return newUser;
  } catch (error) {
    throw new ApiError(500, "Error creating user: " + error.message);
  }
};

const getUserByEmail = async (emailId) => {
  try {
    const user = await User.findOne({ emailId });
    if (!user) {
      throw new Error("User not found with this email");
    }
    return user;
  } catch (error) {
    throw new Error("Error finding user: ", error.message);
  }
};
const findExistedUser = async (emailId) => {
  const existedUser = await User.findOne({
    $or: [{ emailId }],
  });
  return existedUser;
};

module.exports = {
  createUser,
  getUserByEmail,
  findExistedUser,
};
