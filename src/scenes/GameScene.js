import Pipeline from "../objects/Pipeline";
import Player from "../objects/Player";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    const { width, height } = this.scale;
    this.add
      .image(0, 0, "background")
      .setOrigin(0)
      .setDisplaySize(width, height);

    // add tubes and player here  >

    this.pipelines = this.physics.add.staticGroup()
    new Pipeline(this, 500, height, 'tube')

    this.player = new Player(this, 200, height / 2, 'player')
  }
}
