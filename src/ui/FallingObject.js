import Phaser from "phaser";


export default class FallingObject extends Phaser.Physics.Arcade.Sprite {

constructor(scene, x, y, texture, config) {
super(scene, x, y, texture);
this.scene = scene;
this.speed = config.speed;
this.rotationVal = config.rotation;
  }
  spawn(positionX) {
this.setPosition(positionX, -10); //------> Nilai positionX akan diatur ketika method ini dipanggil

this.setActive(true);

this.setVisible(true);
  }
  die() {
    this.destroy();
  }
  update(time) {
this.setVelocityY(100);
this.rotation += this.rotationVal;

const gameHeight = this.scene.scale.height;
if (this.y > gameHeight + 5) {
  this.die();
}
  }
}
