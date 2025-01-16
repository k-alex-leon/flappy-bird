import { GameState } from "../config/gameState";
import PipelinesSpawner from "../objects/PipelinesSpawner";
import Player from "../objects/Player";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    // scene size
    const { width, height } = this.scale;

    // infinity background
    this.bg = this.add.tileSprite(0, 0, 0, 0, "background").setOrigin(0);
    this.bg.setDisplaySize(width, height);

    // add tubes and player here  >

    this.pipes = new PipelinesSpawner(this.physics.world, this);
    this.pipes.startSpawning();

    this.player = new Player(this, 200, height / 2, "player");

    this.physics.world.on("worldbounds", (body) => {
      body.gameObject.onWorldBounds();
    });

    // game over
    this.physics.add.overlap(this.player, this.pipes, (ply, pipe) => {
      this.gameOver();
    });

    // score text
    this.score = this.add
      .text(width / 2, 30, `${GameState.score}`, {
        font: "32px Arial",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    this.score.setDepth(99);
  }

  update(time, delta) {
    // this moves the bg texture
    this.bg.tilePositionX += 2;
    this.player.update(time, delta);
    this.pipes.update(this.player);
  }

  updateScoreDisplay() {
    this.score.setText(`${GameState.score}`);
  }

  gameOver() {
    this.pipes.spawnTimer.remove();
    this.pipes.children.iterate((pipe) => {
      pipe.disable();
    });

    this.sound.play("fail");
    GameState.gameOver = true;

    this.player.failAnimation();

    // Screen shake and fade-out effect
    this.cameras.main.shake(500, 0.01); // Shake screen
    this.cameras.main.fadeOut(1000, 0, 0, 0); // Fade to black

    // Delay transition to Game Over Scene
    this.time.delayedCall(1000, () => {
      this.scene.start("GameOverScene");
    });
  }
}
