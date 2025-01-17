import { GameState } from "../config/gameState";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOverScene");
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .image(width / 2, height / 2, "background")
      .setOrigin(0.5)
      .setDisplaySize(width, height);

    this.add
      .text(width / 2, height / 2, "GAME OVER", {
        font: "128px Jersey",
        color: "#ff0000",
      })
      .setOrigin(0.5)
      .setStroke('#000', 4);

    this.add
      .text(width / 2, height / 2 + 70, `Score: ${GameState.score}`, {
        font: "64px Jersey",
        color: "#ffffff",
      })
      .setOrigin(0.5)
      .setStroke('#000', 4);

    this.add
      .text(width / 2, height / 2 + 120, "Press SPACE to restart", {
        font: "32px Jersey",
        color: "#ffffff",
      })
      .setOrigin(0.5)
      .setStroke('#000', 2); // => adding stroke to text

    this.input.keyboard.once("keydown-SPACE", () => {
      GameState.reset();
      this.scene.start("GameScene");
    });
  }
}
