export default class PreloaderScene extends Phaser.Scene {
    constructor(){
        super('PreloaderScene')
    }

    preload(){
        // image resource
        this.load.image('player', './images/bird.PNG')
        this.load.image('tube', './images/pipeline.png')
        // audio resoruce

        this.load.audio('jump', './audio/jump.mp3')
        this.load.audio('fail', './audio/fail.mp3')
    }

    create(){
        this.scene.start('MainMenuScene')
    }
}