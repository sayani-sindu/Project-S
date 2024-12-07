const { redisConnect } = require('../config/redis');


const createGame =  (socket) => {
  socket.on('Create_Game', async () => {
    
     
  });
};

module.exports = { createGame };
