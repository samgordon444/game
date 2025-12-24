// Game configuration
export const config = {
    // Game dimensions
    width: 1280,
    height: 720,
    
    // Physics settings
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // No gravity for side-scrolling
            debug: false // Set to true for development to see collision boxes
        }
    },
    
    // Scene configuration
    scene: [], // Will be populated in main.js
    
    // Render settings
    pixelArt: true, // Helps with pixel art rendering
    antialias: false, // Keeps pixel art crisp
    
    // Background color
    backgroundColor: '#87CEEB' // Sky blue default
};

