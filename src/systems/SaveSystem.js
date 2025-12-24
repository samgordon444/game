// Handles saving and loading game progress
export class SaveSystem {
    constructor() {
        this.saveKey = 'fantasyExplorationGameSave';
    }

    // Save game state
    save(gameState) {
        try {
            const saveData = {
                collectedItems: gameState.collectedItems,
                itemCounts: gameState.itemCounts,
                unlockedAreas: gameState.unlockedAreas || [],
                timestamp: Date.now()
            };
            
            localStorage.setItem(this.saveKey, JSON.stringify(saveData));
            return true;
        } catch (error) {
            console.error('Failed to save game:', error);
            return false;
        }
    }

    // Load game state
    load() {
        try {
            const saveData = localStorage.getItem(this.saveKey);
            if (!saveData) return null;
            
            return JSON.parse(saveData);
        } catch (error) {
            console.error('Failed to load game:', error);
            return null;
        }
    }

    // Check if save exists
    hasSave() {
        return localStorage.getItem(this.saveKey) !== null;
    }

    // Delete save
    deleteSave() {
        try {
            localStorage.removeItem(this.saveKey);
            return true;
        } catch (error) {
            console.error('Failed to delete save:', error);
            return false;
        }
    }
}

