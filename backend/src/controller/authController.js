const {
  signUpValidation,
  createUserService,
} = require("../service/userService");

const bcrypt = require("bcrypt");

const signUpController = async (req, res) => {
  try {
    signUpValidation(req);
    const newUser = await createUserService(req);
    const token = await newUser.getJWT();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
      httpOnly: true,
    });
    res.json({ message: "User added successfully!", data: savedUser });
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};
