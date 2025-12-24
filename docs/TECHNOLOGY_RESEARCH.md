# Technology Stack Research

## Framework Comparison for 2D Web Games

### Phaser 3
**Pros:**
- Mature, well-documented framework
- Large community and extensive examples
- Built specifically for 2D web games
- Good performance
- Active development
- Free and open source

**Cons:**
- Primarily web-focused (mobile/Steam require wrappers)
- Can be opinionated about structure
- Learning curve for complex features

**Best For:** Traditional 2D games, quick prototyping, web-first development

**Export Options:** Web (native), Mobile (via Cordova/Capacitor), Desktop (via Electron)

---

### PixiJS
**Pros:**
- Extremely high performance
- Very flexible rendering system
- Good for custom rendering needs
- Large community
- Free and open source

**Cons:**
- More manual setup (not a full game framework)
- Need to build game systems yourself
- Steeper learning curve
- Less game-specific features out of the box

**Best For:** Performance-critical games, custom rendering needs, developers who want full control

**Export Options:** Web (native), Mobile (via wrappers), Desktop (via Electron)

---

### Unity WebGL
**Pros:**
- Full-featured game engine
- Excellent tooling and editor
- Strong asset pipeline
- Good documentation
- Can export to many platforms natively
- Large asset store

**Cons:**
- Larger build sizes (can be 10-50MB+)
- Heavier runtime
- May be overkill for simple 2D games
- License considerations (free for small devs, paid for larger revenue)

**Best For:** Complex games, teams familiar with Unity, multi-platform from one codebase

**Export Options:** Web (WebGL), Mobile (iOS/Android native), Desktop (Windows/Mac/Linux), Steam (native)

---

### Godot
**Pros:**
- Open source and free
- Excellent 2D support
- Lightweight engine
- Good export options
- Scene-based architecture
- GDScript is easy to learn (also supports C#)

**Cons:**
- Smaller community than Unity
- Less third-party resources
- Web export can have larger file sizes than pure JS frameworks
- Learning curve if new to game engines

**Best For:** 2D games, open source preference, multi-platform from one codebase, smaller file sizes than Unity

**Export Options:** Web (HTML5), Mobile (iOS/Android), Desktop (Windows/Mac/Linux), Steam (native)

---

### Other Options

**Construct 3** - Visual scripting, good for non-programmers, subscription-based
**GameMaker Studio** - Popular for 2D, has free tier, exports to many platforms
**Defold** - Lightweight, good for 2D, free and open source

---

## Recommendation Framework

### For Simple 2D Web Game:
**Primary Recommendation: Phaser 3**
- Best balance of features, ease of use, and performance
- Excellent documentation and community
- Web-first approach aligns with project goals
- Can wrap for mobile/Steam later

**Alternative: Godot**
- If you want a full engine experience
- Better native multi-platform support
- Good for more complex games

### Decision Criteria Checklist

- [ ] **Complexity:** How complex is the game? (Simple → Phaser, Complex → Godot/Unity)
- [ ] **Team Experience:** What does the team know? (JS → Phaser, Game Engines → Godot/Unity)
- [ ] **Performance Needs:** How performance-critical? (High → PixiJS, Normal → Phaser/Godot)
- [ ] **Build Size:** How important is small file size? (Critical → Phaser/PixiJS, Less Critical → Godot/Unity)
- [ ] **Multi-platform Priority:** How important is native mobile/Steam? (High → Godot/Unity, Low → Phaser)
- [ ] **Development Speed:** Need to prototype fast? (Fast → Phaser, Slower → Godot/Unity setup)

---

## Wrapper Options for Mobile/Steam

### Mobile Wrappers
- **Capacitor** - Modern, good for web apps
- **Cordova** - Mature, large plugin ecosystem
- **Electron** - Desktop only, but can be adapted

### Steam Wrapper
- **Electron** - Wrap web game as desktop app
- **Native export** - If using Godot/Unity, use native exports

---

## Next Steps

1. **Define game complexity** - This will guide framework choice
2. **Prototype in chosen framework** - Build a small proof of concept
3. **Test performance** - Ensure it meets targets on target devices
4. **Validate export options** - Test mobile/Steam wrapper early

---

*Research date: [Date]*
*Decision: [To be filled]*

