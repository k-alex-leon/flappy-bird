import { GameState } from "../config/gameState";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOverScene");
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2, "GAME OVER", {
        font: "48px Arial",
        color: "#ff0000",
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 50, `Score: ${GameState.score}`, {
        font: "24px Arial",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 100, "Press SPACE to restart", {
        font: "24px Arial",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    this.input.keyboard
      .once("keydown-SPACE", () => {
        GameState.reset();
        this.scene.start("GameScene");
      });
  }
}
