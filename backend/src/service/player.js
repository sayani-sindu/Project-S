class Player {
    constructor(name, connection) {
      this.id = uuid.v4();
      this.name = name;
      this.connection = connection;
      this.points = 0;
      this.lastAwardedPoints = 0;
      this.answered = false;
    }
  }
  
  module.exports = {Player}
