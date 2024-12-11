const { redisConnect } = require('../config/redis');


const startGame =  (socket) => {
  socket.on('Create_Game', async () => {
    
     
  });
  
};

module.exports = { createGame };
