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
    
     return res.status(200).json(new ApiResponse(200,{token,user} ,'User loggedIn Successfully'));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Error in login", error.message));
  }
};



module.exports = {
  signUpController,
  loginController,

};
