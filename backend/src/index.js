require('dotenv').config({ path: '../.env' }); 
const  {httpServer}  = require("./app");
const { connect } = require("./config/mongoDB");
const {redisConnect} = require("../src/config/redis");

const startServer = async () => {
  // try {
  const Port = 3000;

   await  connect();
  //  await redisConnect()


    console.log("database");
    await httpServer.listen(Port, () => {
      console.log(`Server Started ${Port}`);
    });
  // } catch (error) {
  //   process.exit(1);

  // }
};
startServer();
