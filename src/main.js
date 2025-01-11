import { GameConfig } from "./config/config";
import BootScene from "./scenes/BootScene";
import GameOverScene from "./scenes/GameOverScene";
import GameScene from "./scenes/GameScene";
import MainMenuScene from "./scenes/MainMenuScene";
import PreloaderScene from "./scenes/PreloaderScene";
import "./style.css";
import Phaser from "phaser";

const config = {
  ...GameConfig,
  scene: [BootScene, PreloaderScene, MainMenuScene, GameScene, GameOverScene],
};

const game = new Phaser.Game(config);
