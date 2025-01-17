export const GameState = {
  gameOver: false,
  score: 0,
  difficulty: {
    pipesSpeed: -200,
    spawnDelay: 3000,
    playerJump: -100,
  },

  reset() {
    this.gameOver = false;
    this.score = 0;
    this.difficulty = {
      pipesSpeed: -200,
      spawnDelay: 3000,
      playerJump: -100,
    };
  },
};
