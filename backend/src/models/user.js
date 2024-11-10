const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({ firstName: {
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
  }});
const User = mongoose.model('User', userSchema);

module.exports = { User };