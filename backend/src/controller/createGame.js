const { redisConnect } = require('../config/redis');
const {pinGeneration} = require('../utils/pinGeneration');

const createGame =  (socket) => {
  socket.on('Create_Game', async (hostname) => {
    const games = await redisConnect();
      const gamePin = pinGeneration();
      const player = {
        socketId: socket.id,
        name: hostName,
        isHost: true
      };
      
      games.set(gamePin, {
        players: [player],
        status: 'waiting'
      });
  
      socket.join(gamePin);
      socket.emit('game-created', { 
        pin: gamePin,
        players: [player]
      });
    
     
  });
}


module.exports = { createGame };
