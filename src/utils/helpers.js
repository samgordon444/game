// Utility helper functions

// Generate a random integer between min and max (inclusive)
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random float between min and max
export function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Clamp a value between min and max
export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

// Format time in seconds to MM:SS
export function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

