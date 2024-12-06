const mongoose = require("mongoose");
let isconnected = false;
const connect = async () => {
  if (isconnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    const instance = await mongoose.connect("mongodb://localhost:27017/projectS");

    isconnected = true;
    console.log("Database connected successfully");
    return instance;
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1); // Exit process on failure
  }
};

const disconnect = async () => {
  if (isconnected) {
    await mongoose.disconnect();
    isconnected = false;
    console.log("Database disconnected successfully");
  } else {
    console.log("No active database connection to disconnect.");
  }
};

module.exports = { connect, disconnect };
