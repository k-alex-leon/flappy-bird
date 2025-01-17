import { GameState } from "../config/gameState";

export default class Player extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this); // add to display list
    scene.physics.add.existing(this); // add to physics engine
    this.body.setCircle(140); // Sets a circle collision body with radius 16
    this.body.setOffset(20, -10); // Adjust the circle a bit
    this.setOrigin(0.5); // this is the midle of the image
    this.setDisplaySize(80, 80);
    this.setCollideWorldBounds(true);

    this.setDepth(99)
    this.cursors = scene.input.keyboard.createCursorKeys(); // input controlls
  }

  update(time, delta) {
    super.update(time, delta);
    if (!this.scene || !this.cursors) return;
    // checks if key is pressed and sets a delay
    if (this.scene.input.keyboard.checkDown(this.cursors.up, 450)) {
      this.setVelocityY(GameState.difficulty.playerJump);
      this.scene.sound.play("jump");
    }

    // changes body angle depending on y velocity
    let angle = Math.atan2(this.body.velocity.y, 180);

    this.setRotation(angle);
  }

  failAnimation() {
    this.cursors = null
    this.setVelocity(0);
    this.body.allowGravity = false;
    this.setCollideWorldBounds(false);

    this.scene.tweens.add({
      targets: this,
      angle: -765, // Rotate the player
      duration: 1000,
      ease: "Cubic.easeOut",
    });

    // Simulate a fall to the ground
    this.setVelocityY(300);
  }
}
