export default class Pipeline extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    this.setDisplaySize(200, 300)
    this.setOrigin(0.5)
    this.setAngle(180)
    scene.physics.add.existing(this, true);
  }
}
