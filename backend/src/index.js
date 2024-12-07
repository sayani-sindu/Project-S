require('dotenv').config({ path: '../.env' }); 
const  app  = require("./app");
const { connect } = require("./config/db");
const {redisConnect} = require("../src/config/redis");


const startServer = async () => {
  try {
    await connect();
    console.log("database");
    await app.listen(3000, () => {
      console.log("Server Started");
    });
  } catch (error) {
    process.exit(1);
  }
};
startServer();
