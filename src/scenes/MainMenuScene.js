export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super("MainMenuScene");
  }

  create() {
    const { width, height } = this.scale;

    // TODO - change font to original
    this.add
      .text(width / 2, height / 2, "'Flappy Bird'", {
        font: "32px Arial",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 50, "Press SPACE to play", {
        font: "20px Arial",
        color: "#ffffff",
      })
      .setOrigin(0.5);

      // listen to keyboard event
    this.input.keyboard.once("keydown-SPACE", () => {
      this.scene.start("GameScene");
    });
  }
}
