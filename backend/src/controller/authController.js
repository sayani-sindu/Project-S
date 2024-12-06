const {
  createUserService,
  verifyToken,
  verifyUser,
} = require("../service/userService");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

const signUpController = async (req, res) => {
  try {
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

const loginController = async (req, res) => {
  try {
    const { token, user } = await verifyUser(req);
    console.log(token);
    console.log(user);
    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
      httpOnly: true,
    });
    return res.status(200).json(new ApiResponse(200, `User loggedIn ${user} `));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Error in login", error.message));
  }
};

const logOut = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.json(new ApiResponse(200, "logged out"));
};

module.exports = {
  signUpController,
  loginController,
  logOut,
};
