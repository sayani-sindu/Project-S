import io from 'socket.io-client';

export const createSocketConnection = (token) => {
  const socket = io('http://localhost:3000', {
    auth: { token },
    transports: ['websocket']
  });

  const socketEvents = {
    onConnect: (callback) => {
      socket.on('connect', () => {
        console.log('Connected with socket id:', socket.id);
        callback?.(socket.id);
      });
    },

    createGame: (userData) => {
      socket.emit('create-game', userData);
    },

    joinGame: (gamePin, userData) => {
      socket.emit('join-game', { pin: gamePin, ...userData });
    },

    onPlayerJoined: (callback) => {
      socket.on('player-joined', (data) => callback(data));
    },

    submitAnswer: (gamePin, answer) => {
      socket.emit('submit-answer', { pin: gamePin, answer });
    },

    disconnect: () => {
      socket.disconnect();
    },

    // Add more event handlers as needed
    removeListener: (eventName) => {
      socket.off(eventName);
    }
  };

  return socketEvents;
};