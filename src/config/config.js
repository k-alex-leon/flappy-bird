import Phaser from "phaser";
import { GAME_SIZE, PARENT_ID } from "./constants";

let isDebuging = true;
const scene = document.getElementById("canvas-scene");

export const GameConfig = {
  type: Phaser.CANVAS,
  canvas: scene,
  with: GAME_SIZE.x,
  height: GAME_SIZE.y,
  parent: PARENT_ID,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: isDebuging,
    },
  },
  scene: [],
};
