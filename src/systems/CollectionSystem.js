// Tracks collected items
export class CollectionSystem {
    constructor() {
        this.collectedItems = [];
        this.itemCounts = {}; // Track counts per item type
    }

    // Add an item to the collection
    addItem(itemType) {
        this.collectedItems.push({
            type: itemType,
            timestamp: Date.now()
        });
        
        // Update count
        if (!this.itemCounts[itemType]) {
            this.itemCounts[itemType] = 0;
        }
        this.itemCounts[itemType]++;
    }

    // Get total items collected
    getTotalCount() {
        return this.collectedItems.length;
    }

    // Get count for a specific item type
    getCount(itemType) {
        return this.itemCounts[itemType] || 0;
    }

    // Get all collected items
    getAllItems() {
        return [...this.collectedItems];
    }

    // Get unique item types collected
    getUniqueTypes() {
        return Object.keys(this.itemCounts);
    }
}

