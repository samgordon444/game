// Manages set routes/paths for wandering
export class RouteSystem {
    constructor() {
        this.routes = [];
    }

    // Define a route (array of waypoints)
    addRoute(name, waypoints) {
        this.routes.push({
            name: name,
            waypoints: waypoints, // Array of {x, y} coordinates
            isLoop: true // Routes loop by default
        });
    }

    // Get a route by name
    getRoute(name) {
        return this.routes.find(route => route.name === name);
    }

    // Get all routes
    getAllRoutes() {
        return this.routes;
    }

    // Get position along route at a given progress (0-1)
    getPositionOnRoute(route, progress) {
        if (!route || route.waypoints.length === 0) return null;
        
        const totalDistance = this.calculateRouteLength(route);
        const targetDistance = totalDistance * progress;
        
        let currentDistance = 0;
        for (let i = 0; i < route.waypoints.length - 1; i++) {
            const segmentLength = Phaser.Math.Distance.Between(
                route.waypoints[i].x,
                route.waypoints[i].y,
                route.waypoints[i + 1].x,
                route.waypoints[i + 1].y
            );
            
            if (currentDistance + segmentLength >= targetDistance) {
                // Interpolate along this segment
                const segmentProgress = (targetDistance - currentDistance) / segmentLength;
                return {
                    x: Phaser.Math.Linear(
                        route.waypoints[i].x,
                        route.waypoints[i + 1].x,
                        segmentProgress
                    ),
                    y: Phaser.Math.Linear(
                        route.waypoints[i].y,
                        route.waypoints[i + 1].y,
                        segmentProgress
                    )
                };
            }
            
            currentDistance += segmentLength;
        }
        
        // Return last waypoint if we've gone past the end
        const last = route.waypoints[route.waypoints.length - 1];
        return { x: last.x, y: last.y };
    }

    // Calculate total length of a route
    calculateRouteLength(route) {
        let length = 0;
        for (let i = 0; i < route.waypoints.length - 1; i++) {
            length += Phaser.Math.Distance.Between(
                route.waypoints[i].x,
                route.waypoints[i].y,
                route.waypoints[i + 1].x,
                route.waypoints[i + 1].y
            );
        }
        return length;
    }
}

