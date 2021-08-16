const config = {
    width: 2048,
    height: 512,
    backgroundColor: 0xdedede,
    physics: {
        default: 'arcade'
    }, 
    scene: [
        level1
    ]
};

new Phaser.game(config);