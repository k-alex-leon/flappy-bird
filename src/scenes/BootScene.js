export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    // this.load.image("background", "./images/forest.webp");
    this.load.image("background", "./images/sky.jpg");
  }

  create() {
    this.scene.start("PreloaderScene");
  }
}
