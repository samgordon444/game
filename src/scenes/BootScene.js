export class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Load any initial assets needed for the boot screen
        // For now, we'll just move to preload
    }

    create() {
        // Boot screen logic (if needed)
        // For now, immediately start loading assets
        this.scene.start('PreloadScene');
    }
}

