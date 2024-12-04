const { createUserService } = require("../service/userService");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

const signUpController = async (req, res) => {
  try {
   
    console.log(req.body);
    const { newUser, token } = await createUserService(req);
    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
      httpOnly: true,
    });

    return res
      .status(200)
      .json(new ApiResponse(200, newUser, "User Registered "));
  } catch (err) {
    return res.status(400).json(new ApiError(400, "Error", err.message));
  }
};
const loginController = async (req, res) => {};
module.exports = {
  signUpController,
  loginController,
};
