// Player character entity
export class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        // TODO: Replace 'player' with actual sprite key once loaded
        super(scene, x, y, 'player');
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        // Set up physics body
        this.body.setCollideWorldBounds(true);
        
        // Player properties
        this.speed = 200; // pixels per second
    }

    // Move left
    moveLeft() {
        this.body.setVelocityX(-this.speed);
        this.setFlipX(true); // Flip sprite to face left
    }

    // Move right
    moveRight() {
        this.body.setVelocityX(this.speed);
        this.setFlipX(false); // Face right
    }

    // Stop moving
    stop() {
        this.body.setVelocityX(0);
    }
}

