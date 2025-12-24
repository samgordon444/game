// Shows travel log of discoveries
export class TravelLogUI {
    constructor(scene) {
        this.scene = scene;
        this.logEntries = [];
    }

    // Add a log entry
    addEntry(message) {
        this.logEntries.push({
            message: message,
            timestamp: Date.now()
        });
        
        // Keep only last 10 entries
        if (this.logEntries.length > 10) {
            this.logEntries.shift();
        }
    }

    // Display log entries (simple text display)
    display(x, y) {
        // TODO: Create visual log display
        // For now, just log to console
        console.log('Travel Log:', this.logEntries);
    }

    // Clear log
    clear() {
        this.logEntries = [];
    }
}

