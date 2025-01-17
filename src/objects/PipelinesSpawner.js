import { GameState } from "../config/gameState";
import Pipeline from "./Pipeline";

export default class PipelinesSpawner extends Phaser.Physics.Arcade.Group {
  constructor(world, scene, children = []) {
    super(world, scene, children);
    scene.add.existing(this);
  }

  startSpawning() {
    this.spawnTimer = this.scene.time.addEvent({
      delay: GameState.difficulty.spawnDelay,
      callback: this.spawn,
      callbackScope: this,
      loop: true,
    });
  }

  spawn() {
    const { width, height } = this.scene.scale;
    const gap = 100; // Set your desired constant gap size

    // Randomly position the center of the gap
    const gapCenter = Phaser.Math.Between(100, height - 100);

    // Calculate heights for top and bottom pipes
    const topPipeHeight = gapCenter - gap;
    const bottomPipeY = gapCenter;
    const bottomPipeHeight = height - bottomPipeY;

    // Create the top and bottom pipes
    const top = new Pipeline(
      this.scene,
      width + 100,
      0,
      "tube",
      topPipeHeight,
      true
    );
    const bottom = new Pipeline(
      this.scene,
      width + 100,
      bottomPipeY,
      "tube",
      bottomPipeHeight,
      false
    );

    // add to the children list
    this.children.set(top);
    this.children.set(bottom);
  }

  update(player) {
    this.children.iterate((pipe) => {
      if (!pipe.active) return;

      if (pipe.body.width + pipe.x < 0) {
        pipe.destroy();
      }

      if (!pipe.hasScored && pipe.body.width + pipe.x < player.x) {
        pipe.hasScored = true;
        GameState.score += pipe.isTop ? 1 : 0; // => this help with duplicate data
        this.scene.updateScoreDisplay(); // => update the score on screen
        if (pipe.isTop) this.scene.sound.play("coin");

        this.scene.increaseDifficulty();
      }
    });
  }
}
