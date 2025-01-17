export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super("MainMenuScene");
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .image(width / 2, height / 2, "background")
      .setOrigin(0.5)
      .setDisplaySize(width, height);

    // TODO - change font to original
    this.add
      .text(width / 2, height / 2, "'Flappy Bird'", {
        font: "64px Jersey",
        color: "#ffffff",
      })
      .setOrigin(0.5)
      .setStroke("#000", 4);

    this.add
      .text(width / 2, height / 2 + 50, "Press SPACE to play", {
        font: "32px Jersey",
        color: "#ffffff",
      })
      .setOrigin(0.5)
      .setStroke("#000", 2);

    // listen to keyboard event
    this.input.keyboard.once("keydown-SPACE", () => {
      this.scene.start("GameScene");
    });
  }
}
