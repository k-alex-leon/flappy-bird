export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    this.load.image("background", "./images/woods.webp");
  }

  create() {
    this.scene.start("PreloaderScene");
  }
}
