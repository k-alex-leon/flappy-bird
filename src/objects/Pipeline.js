export default class Pipeline extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, texture, height = 400, isTop = false) {
    super(scene, x, y, texture);
    this.scene = scene;
    this.isTop = isTop;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setDisplaySize(200, height);
    this.setOrigin(0.5, isTop ? 0.5 : 0);
    this.setFlipY(!isTop); // flip image depending on position
    this.setImmovable(true);
    this.body.allowGravity = false;

    this.hasScored = false;
    this.move();
  }

  move() {
    this.setVelocityX(-200);
  }

  disable() {
    if (!this.active) return;
    this.setVelocity(0);
    this.disableBody(true, false);
  }
}
