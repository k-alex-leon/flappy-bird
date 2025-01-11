export const GameState = {
  gameOver: false,
  score: 0,

  reset() {
    this.gameOver = false;
    this.score = 0;
  },
};
