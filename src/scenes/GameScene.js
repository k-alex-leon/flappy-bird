import { GameState } from "../config/gameState";
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

    // this.pipelines = this.physics.add.staticGroup();
    this.pipeline = new Pipeline(this, 600, height, "tube");

    this.player = new Player(this, 200, height / 2, "player");

    this.physics.add.collider(this.player, this.pipeline, () => {
      this.sound.play("fail");
      GameState.gameOver = true;
      this.scene.start("GameOverScene");
    });
  }
}
