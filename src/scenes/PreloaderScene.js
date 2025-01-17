export default class PreloaderScene extends Phaser.Scene {
    constructor(){
        super('PreloaderScene')
    }

    preload(){
        // image resource
        this.load.image('player', './images/bird.PNG')
        this.load.image('tube', './images/pipeline.png')
        this.load.image('ground', './images/ground.jpg')
        this.load.image('arrow', './images/uparrow.png')
        // audio resoruce

        this.load.audio('jump', './audio/jump.mp3')
        this.load.audio('fail', './audio/fail.mp3')
        this.load.audio('coin', './audio/coin.mp3')

        // fonts
        this.load.font('Jersey', './fonts/Jersey15-Regular.ttf', 'truetype')
    }

    create(){
        this.scene.start('MainMenuScene')
    }
}