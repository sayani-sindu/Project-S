const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  emailID: {
    type: String,
    required: true,
    unique: true,
    maxLength: 50,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address: " + value);
      }
    },
  },
  Password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw new Error("password is not strong");
      }
    },
  },
});

// hashing the password before saving to the database
userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;

  next();
});

userSchema.methods.getJWT = async function () {
  const payload = {
    userId: this._id,
    emailID: this.emailID,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(Password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
