const redis = require("redis");
let redisClient = null;

const redisConnect = async () => {
  if (!redisClient) {
    redisClient = await redis
      .createClient()
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();
    console.log("Redis Client created");
  }

  return redisClient;
};

module.exports = { redisConnect };
