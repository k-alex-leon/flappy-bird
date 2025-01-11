export default class Player extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this); // add to display list
    scene.physics.add.existing(this); // add to physics engine
    scene.events.on("update", this.update, this); // add to global update list
    this.setOrigin(0.5); // this is the midle of the image
    this.setDisplaySize(80, 80);
    this.setCollideWorldBounds(true);

    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    super.update(time, delta);
    if (!this.scene) return;
    // checks if key is pressed and sets a delay
    if (this.scene.input.keyboard.checkDown(this.cursors.up, 450)) {
      this.setVelocityY(-100);
      this.scene.sound.play("jump");
    }

    // changes body angle depending on y velocity
    let angle = Math.atan2(this.body.velocity.y, 180);

    this.setRotation(angle);
  }
}
