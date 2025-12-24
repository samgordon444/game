# Game Development Project Plan

**Development roadmap and detailed planning**

> **Note:** For quick game concept reference, see [CONTEXT.md](./CONTEXT.md)

---

## Current Status

**Phase:** Pre-Production / Initial Setup  
**Completed:**
- ✅ Technology stack chosen (Phaser 3.80.1)
- ✅ Project structure initialized
- ✅ Basic Phaser setup with scenes and systems

**Next Steps:**
- Define specific environments (which 1-2 to start)
- Create initial GDD
- Implement core exploration mechanics
- Design and create first environment assets

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

## Phase 2: Design Documentation

### Game Design Document (GDD)

**Sections to Include:**
- Executive Summary
- Game Overview
- Core Mechanics (detailed)
- Controls & Input
- Progression Systems
- Level/World Design
- UI/UX Flow
- Art Style Guide
- Audio Direction
- Technical Requirements

### Detailed Game Concept

#### Character
- **Player:** Relatable human-like being (wizard or elf)
- **Not:** Fairies, dragons, or overly fantastical creatures
- **Design:** Simple, approachable, average person with magical abilities
- **Movement:** Primary walking (side-scrolling), flying may appear as discovery later

#### World Design
- **Structure:** Handcrafted (not procedural)
- **Initial Scope:** 1-2 environments to start
- **Perspective:** Side-scrolling 2D
- **Environments:** Examples - Enchanted Forest, Misty Valley, Crystal Cave, Starlit Meadow
- **Philosophy:** Quality over quantity, expandable later

#### What Players Discover

**Simple Item Collection:**
- Rare flowers, crystals, feathers
- Mystical artifacts
- Glowing orbs, stardust
- Natural items (shells, stones, leaves)
- **Simple system:** No deep menus, nested structures, or complex taxonomy

**Magical Phenomena:**
- Aurora sightings
- Meteor showers
- Glowing mushrooms
- Floating lights
- Ancient ruins
- Hidden groves

**Creatures (Peaceful):**
- Friendly wildlife
- Magical creatures (butterflies, small spirits)
- Optional: simple encounter/collection

**Locations:**
- Scenic viewpoints
- Special landmarks
- Each location discovered adds to simple travel log

#### Progression Systems

**Simple Collection:**
- Items collected (simple count/list)
- Locations discovered
- Creatures encountered
- Phenomena witnessed

**Character Growth (Simple):**
- Unlock new areas/paths
- Movement upgrades (faster walking, maybe flight later)
- Collection capacity (carry more items)
- Discovery abilities (sense hidden items)

**World Unfolding:**
- New environments unlock as you explore
- New paths/routes open up
- Seasonal changes (future)
- Time of day affects discoveries

### Prototype Planning

**Key Prototypes to Build:**
1. **Core Mechanic Prototype** - Side-scrolling walking, item collection, prove exploration is fun
2. **Control Scheme Prototype** - Simple left/right walking, test responsiveness
3. **Art Style Test** - Detailed pixel art validation, atmospheric visuals
4. **Performance Test** - Ensure web/mobile viability
5. **Side-Scrolling Path System** - Test path design, item placement, exploration flow

### Asset Pipeline Planning
- Art asset specifications (sprite sizes, animation frame counts)
- Audio format requirements
- Asset naming conventions
- Version control strategy for assets

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

## Phase 5: Prototype Development

### Core Mechanic Prototype
**Goal:** Prove the game is fun
- [ ] Implement core gameplay loop
- [ ] Basic controls
- [ ] Minimal art (placeholders OK)
- [ ] Playtest and iterate

### Technical Prototype
**Goal:** Validate technical approach
- [ ] Performance testing
- [ ] Input system
- [ ] Asset loading
- [ ] Cross-platform testing

---

## Phase 6: Production Planning

### MVP Scope

**Minimum Viable Product:**
- 1 handcrafted side-scrolling environment
- Simple walking controls (left/right)
- Basic item collection (pick up items along path)
- Simple collection display
- Beautiful pixel art for one environment

**Future Expansion:**
- Additional environments
- More items to discover
- Flying ability/discovery
- Seasonal changes
- More routes within environments

### Milestone Planning
- **Milestone 1:** Core mechanic working
- **Milestone 2:** First playable level
- **Milestone 3:** Content complete
- **Milestone 4:** Polish and optimization
- **Milestone 5:** Release ready

### Task Breakdown
- Create detailed task list from GDD
- Estimate effort for each task
- Prioritize features
- Identify dependencies

### Risk Assessment
- Technical risks
- Scope risks
- Timeline risks
- Platform-specific risks

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

- Game design frameworks (MDA, DDE)
- 2D game development tutorials
- Platform-specific documentation
- Asset marketplaces (itch.io, OpenGameArt)
- Community forums and Discord servers
- [Decision Log](./docs/DECISION_LOG.md) - Key milestone decisions
- [Cast n Chill Analysis](./docs/CAST_N_CHILL_ANALYSIS.md) - Inspiration game analysis

---

*This is a living document - update as the project evolves*
