# Game Development Project Plan

**Development roadmap and detailed planning**

> **Note:** For quick game concept reference, see [CONTEXT.md](./CONTEXT.md)

---

## Current Status

**Phase:** Pre-Production / Initial Setup ✅  
**Completed:**
- ✅ Technology stack chosen (Phaser 3.80.1)
- ✅ Project structure initialized
- ✅ Basic Phaser setup with scenes and systems

**Next Phase:** Core Development - Foundation (see Development Phases below)

---

## Phase 1: Concept & Vision ✅

### Core Game Concept

**Game Type:** Fantasy Exploration Simulator - Side-scrolling exploration game  
**Core Activity:** Aimless wandering through handcrafted fantasy landscapes  
**Core Experience:** Peaceful, aimless exploration with simple item collection

**Core Gameplay Loop:**
- Walk through side-scrolling environments, discover items, take in scenery
- Player controls all movement - no automatic wandering
- Simple item gathering (no complex menus or nested systems)
- Progression: Unlock new areas/paths, discover new items and locations

**Target Audience:** Casual gamers, relaxation seekers, exploration game fans, players who enjoy beautiful scenery

**Emotional Experience:** Relaxed, calm, peaceful, meditative, wonder

### Game Pillars

1. **Peaceful Exploration** - No pressure, no danger, just wander and discover
2. **Flexible Playtime** - Enjoyable in 5 minutes or 5 hours
3. **Player-Controlled** - Player controls all movement and exploration
4. **Beautiful Pixel Art** - Detailed, polished, atmospheric visuals
5. **Simplicity First** - Simple systems, no complex menus or nested structures
6. **Handcrafted Worlds** - Quality over quantity, start small (1-2 environments), expand later
7. **Aimless Discovery** - No quests or objectives, player sets their own pace

---

## Design Reference

### Character
- **Player:** Relatable human-like being (wizard or elf)
- **Not:** Fairies, dragons, or overly fantastical creatures
- **Design:** Simple, approachable, average person with magical abilities
- **Movement:** Primary walking (side-scrolling), flying may appear as discovery later

### World Design
- **Structure:** Handcrafted (not procedural)
- **Initial Scope:** 1-2 environments to start
- **Perspective:** Side-scrolling 2D
- **Environments:** Examples - Enchanted Forest, Misty Valley, Crystal Cave, Starlit Meadow
- **Philosophy:** Quality over quantity, expandable later

### What Players Discover

**Simple Item Collection:**
- Rare flowers, crystals, feathers
- Mystical artifacts
- Glowing orbs, stardust
- Natural items (shells, stones, leaves)
- **Simple system:** No deep menus, nested structures, or complex taxonomy

**Magical Phenomena:**
- Aurora sightings, meteor showers, glowing mushrooms
- Floating lights, ancient ruins, hidden groves

**Creatures (Peaceful):**
- Friendly wildlife, magical creatures (butterflies, small spirits)
- Optional: simple encounter/collection

**Locations:**
- Scenic viewpoints, special landmarks
- Each location discovered adds to simple travel log

### Progression Systems

**Simple Collection:**
- Items collected (simple count/list)
- Locations discovered, creatures encountered, phenomena witnessed

**Character Growth (Simple):**
- Unlock new areas/paths
- Movement upgrades (faster walking, maybe flight later)
- Collection capacity, discovery abilities

**World Unfolding:**
- New environments unlock as you explore
- New paths/routes open up
- Seasonal changes (future), time of day affects discoveries

---

## Phase 3: Technical Architecture ✅

### Technology Stack (Chosen)

- **Framework:** Phaser 3.80.1
- **Build Tool:** Vite 4.5.2
- **Rationale:** Mature 2D web game framework, good documentation, web-first approach

### Project Structure
```
game/
├── docs/              # Design documents, GDD, planning
├── assets/            # Source assets (organized by type)
│   ├── sprites/
│   ├── audio/
│   ├── fonts/
│   └── ui/
├── src/               # Source code
│   ├── scenes/        # Game scenes/screens
│   ├── entities/      # Game objects/characters
│   ├── systems/       # Game systems (physics, input, etc.)
│   ├── utils/         # Helper functions
│   └── config/        # Game configuration
├── build/             # Build output
├── tests/             # Unit/integration tests
└── tools/             # Build tools, asset processors
```

### Platform Considerations

**Web:**
- Browser compatibility
- Performance optimization
- Asset loading strategies
- Responsive design considerations

**Mobile (via wrapper):**
- Touch input mapping
- Screen size variations
- Performance on lower-end devices
- App store requirements

**Steam (via wrapper):**
- Desktop controls
- Steam API integration (achievements, cloud saves)
- Distribution requirements

---

## Phase 4: Pre-Production Structure ✅

### Initial Project Structure (Completed)
- ✅ Initialize project with chosen framework
- ✅ Set up folder structure
- ✅ Create basic configuration files
- ✅ Set up build pipeline
- ✅ Initialize version control

### Development Workflow
- Branching strategy
- Code review process
- Asset integration workflow
- Testing procedures
- Build and deployment process

### Tools & Pipeline
- Asset creation tools (Aseprite, Photoshop, etc.)
- Audio tools (Audacity, Reaper, etc.)
- Version control for assets
- Asset optimization pipeline
- Build automation

---

## Development Phases

These phases build on each other. Work through them at your own pace - no rigid timelines.

### Phase 1: Foundation
**Goal:** Get basic movement working

**Key Tasks:**
- Character sprite appears on screen
- Left/Right controls move character smoothly
- Camera follows character
- Basic ground/platform to walk on

**Done When:** You can control the character and it feels responsive

---

### Phase 2: World Building
**Goal:** Create one explorable environment

**Key Tasks:**
- One complete side-scrolling path (at least 2-3 screen widths)
- Background layers (sky, distant elements, foreground)
- Ground/platforms with collision
- Basic visual polish (no placeholder boxes)

**Done When:** The environment feels like a real place you want to explore

---

### Phase 3: Discovery
**Goal:** Add items to find and collect

**Key Tasks:**
- 3-5 collectible items placed in the world
- Character can walk up to items and collect them
- Visual feedback when collecting (sparkle, sound, item disappears)
- Simple counter showing items collected

**Done When:** Finding an item feels satisfying and doesn't interrupt the peaceful flow

---

### Phase 4: Polish
**Goal:** Make it feel like a real game, not a prototype

**Key Tasks:**
- Character has walking animation (idle + walk cycle)
- Ambient music or soundscape
- Sound effects for collection
- Smooth camera movement
- Polished UI (collection counter, maybe simple menu)
- Performance runs at 60fps

**Done When:** It feels like a finished game, not a work-in-progress

---

### Phase 5: Content Expansion
**Goal:** Expand MVP into a complete experience

**Key Tasks:**
- Expand environment to 5-10 screen widths
- Add 10-15 total collectibles
- Add 2-3 special locations/landmarks
- Simple "travel log" showing discovered locations
- Playtest with others and iterate

**Done When:** A new player can explore for 10-15 minutes and feel satisfied

---

## MVP Scope

**Minimum Viable Product (Phases 1-4):**
- 1 handcrafted side-scrolling environment
- Simple walking controls (left/right)
- Basic item collection (pick up items along path)
- Simple collection display
- Beautiful pixel art for one environment

**Future Expansion (Post-MVP):**
- Additional environments
- More items to discover
- Flying ability/discovery
- Seasonal changes
- More routes within environments

---

## Key Principles

1. **Start Small** - Build the smallest playable version first
2. **Iterate Fast** - Get feedback early and often
3. **Document Decisions** - Keep track of why choices were made
4. **Platform-Agnostic Design** - Build for web, adapt for others
5. **Performance First** - Web games need to be lightweight
6. **User Experience** - Controls and feedback are critical

---

## Open Questions

1. **Monetization?** (Free, one-time purchase, freemium)
2. **Timeline expectations?** (Weekend project, months, ongoing)
3. **Team size?** (Solo, small team, specific roles needed)
4. **Specific environments?** (Which 1-2 environments to start with?)
5. **Item types?** (What specific items to collect? Flowers, crystals, artifacts?)
6. **Progression triggers?** (What unlocks new areas? Collection count? Time? Discovery milestones?)

---

## Resources & References

- [Decision Log](./docs/DECISION_LOG.md) - Key milestone decisions
- [Vision & Development Guidance](./docs/VISION_AND_ROADMAP.md) - Development philosophy, principles, and mindset guidance
- Asset marketplaces (itch.io, OpenGameArt)
- Phaser 3 documentation and tutorials

---

*This is a living document - update as the project evolves*
