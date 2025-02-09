class Game {
    constructor(quiz, host, wsServer) {
      this.id = uuid.v4();
      this.quiz = quiz;
      this.code = this.generateCode();
      this.players = [];
      this.state = 'LOBBY';
      this.currentQuestionIndex = -1;
      this.time = 60;
      this.host = host;
      this.wsServer = wsServer;
    }
    generateCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
      }
    
      start() {
        this.changeState('PLAY');
        this.nextQuestion();
        setInterval(() => this.tick(), 1000);
      }
    
      tick() {
        this.time--;
        this.broadcast({ type: 'TICK', time: this.time });
    
        if (this.time === 0) {
          switch (this.state) {
            case 'PLAY':
              this.reveal();
              break;
            case 'REVEAL':
              this.intermission();
              break;
            case 'INTERMISSION':
              this.nextQuestion();
              break;
          }
        }
      }
    
      nextQuestion() {
        this.currentQuestionIndex++;
    
        if (this.currentQuestionIndex >= this.quiz.questions.length) {
          this.end();
          return;
        }
    
        this.resetPlayerAnswers();
        this.changeState('PLAY');
        this.time = this.quiz.questions[this.currentQuestionIndex].time;
        this.broadcast({ type: 'QUESTION', question: this.quiz.questions[this.currentQuestionIndex] });
      }
    
      changeState(newState) {
        this.state = newState;
        this.broadcast({ type: 'STATE_CHANGE', state: newState });
      }
    
      resetPlayerAnswers() {
        this.players.forEach(player => player.answered = false);
      }
    
      end() {
        this.changeState('END');
      }
    
      reveal() {
        this.players.forEach(player => {
          if (!player.answered) {
            player.lastAwardedPoints = 0;
          }
        });
        this.broadcast({ type: 'REVEAL', players: this.players });
        this.changeState('REVEAL');
      }
    
      intermission() {
        this.time = 30;
        this.changeState('INTERMISSION');
        this.broadcast({ type: 'LEADERBOARD', leaderboard: this.getLeaderboard() });
      }
    
      getLeaderboard() {
        return this.players
          .sort((a, b) => b.points - a.points)
          .slice(0, 3)
          .map(player => ({ name: player.name, points: player.points }));
      }
    
      broadcast(message) {
        this.players.forEach(player => {
          player.connection.send(JSON.stringify(message));
        });
        this.host.send(JSON.stringify(message));
      }
    
      onPlayerJoin(name, connection) {
        const player = new Player(name, connection);
        this.players.push(player);
    
        this.broadcast({ type: 'PLAYER_JOIN', player });
      }
    
      onPlayerDisconnect(playerId) {
        this.players = this.players.filter(player => player.id !== playerId);
        this.broadcast({ type: 'PLAYER_DISCONNECT', playerId });
      }
    
      onPlayerAnswer(playerId, answerIndex) {
        const player = this.players.find(p => p.id === playerId);
        const currentQuestion = this.quiz.questions[this.currentQuestionIndex];
    
        if (currentQuestion.choices[answerIndex].correct) {
          player.points += this.getPointsReward();
        }
        player.answered = true;
    
        if (this.players.every(p => p.answered)) {
          this.reveal();
        }
      }
    
      getPointsReward() {
        const answered = this.players.filter(p => p.answered).length;
        const orderReward = Math.max(5000 - answered * 1000, 0);
        const timeReward = this.time * 10; // Example multiplier
        return orderReward + timeReward;
      }
    }
module.exports = {Game}