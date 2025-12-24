// Simple inventory display UI
export class InventoryUI {
    constructor(scene, x, y) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        
        // Create UI container
        this.container = scene.add.container(x, y);
        
        // Background panel (optional)
        // this.background = scene.add.rectangle(0, 0, 200, 100, 0x000000, 0.7);
        // this.container.add(this.background);
        
        // Title text
        this.titleText = scene.add.text(0, -40, 'Collection', {
            fontSize: '20px',
            fill: '#ffffff'
        }).setOrigin(0.5);
        this.container.add(this.titleText);
        
        // Item count text
        this.countText = scene.add.text(0, 0, 'Items: 0', {
            fontSize: '16px',
            fill: '#ffffff'
        }).setOrigin(0.5);
        this.container.add(this.countText);
        
        // Make container invisible by default
        this.container.setVisible(false);
    }

    // Update the inventory display
    update(collectionSystem) {
        const totalCount = collectionSystem.getTotalCount();
        this.countText.setText(`Items: ${totalCount}`);
    }

    // Show the inventory
    show() {
        this.container.setVisible(true);
    }

    // Hide the inventory
    hide() {
        this.container.setVisible(false);
    }
}

