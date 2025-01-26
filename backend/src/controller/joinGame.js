const { redisConnect } = require('../config/redis');

const joinGame = (socket) => {
  socket.on('Join_Game', async (pin, playerName) => {
    const games = await redisConnect();
    const game = games.get(pin);
    if (!game) {
      socket.emit('game-not-found');
      return;
    }
    if (game.status !== 'waiting') {
      socket.emit('game-not-found');
      return;
    }
    const player = {
      socketId: socket.id,
      name: playerName,
      isHost: false
    };
    game.players.push(player);
    games.set(pin, game);
    socket.join(pin);
    socket.emit('game-joined', {
      pin,
      players: game.players
    });
  });
}
module.exports = { joinGame };