import Phaser from 'phaser';
import { config } from './config.js';
import { BootScene } from './scenes/BootScene.js';
import { PreloadScene } from './scenes/PreloadScene.js';
import { GameScene } from './scenes/GameScene.js';

// Register all scenes
config.scene = [
    BootScene,
    PreloadScene,
    GameScene
];

// Create the Phaser game instance
const game = new Phaser.Game(config);

// Make game instance globally available for debugging (optional)
window.game = game;

