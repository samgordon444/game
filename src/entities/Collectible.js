// Collectible item entity
export class Collectible extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, itemType) {
        // TODO: Replace 'collectible' with actual sprite key once loaded
        super(scene, x, y, 'collectible');
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        // Item properties
        this.itemType = itemType; // e.g., 'flower', 'crystal', 'feather'
        this.isCollected = false;
        
        // Make body smaller for easier collection
        this.body.setSize(this.width * 0.8, this.height * 0.8);
    }

    // Collect this item
    collect() {
        if (this.isCollected) return false;
        
        this.isCollected = true;
        
        // Play collection animation/effect
        // TODO: Add particle effect or animation
        
        // Remove from scene
        this.destroy();
        
        return true;
    }
}

