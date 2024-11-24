const { signUpController,loginController } = require("../../controller/authController");
const express = require("express");
const router = express.Router();

router.route("/register").post(signUpController);
router.route("/login").post(loginController);

module.exports = router ;
