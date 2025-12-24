export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        // Create a simple loading bar
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Loading text
        const loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', {
            fontSize: '32px',
            fill: '#ffffff'
        });
        loadingText.setOrigin(0.5);
        
        // Progress bar background
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2, 320, 50);
        
        // Loading progress event
        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 + 10, 300 * value, 30);
        });
        
        // Loading complete event
        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
        });
        
        // TODO: Load your game assets here
        // Example:
        // this.load.image('character', 'assets/sprites/character/character.png');
        // this.load.image('background', 'assets/sprites/environment/background.png');
    }

    create() {
        // Once all assets are loaded, start the game scene
        this.scene.start('GameScene');
    }
}

