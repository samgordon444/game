# Game Project Context

**Quick reference for AI agents and collaborators**

## Game Concept

**Title:** (TBD)  
**Type:** Fantasy Exploration Simulator - Side-scrolling 2D exploration game  
**Genre:** Casual Exploration / Walking Simulator  
**Platforms:** Web (primary), Mobile & Steam (future via wrappers)

## Core Experience

A relaxed, side-scrolling exploration game where players control a relatable magical being (wizard or elf) aimlessly wandering through handcrafted fantasy landscapes. Focus is on beautiful scenery, peaceful discovery, and simple item collection. **No quests, no pressure, just exploration.**

## Key Design Decisions

### Character
- **Player:** Relatable human-like being (wizard or elf)
- **Not:** Fairies, dragons, or overly fantastical creatures
- **Design:** Simple, approachable, average person with magical abilities

### Movement & Controls
- **Primary:** Walking (side-scrolling, left/right movement)
- **Special:** Flying may appear as a short discovery/ability later
- **Controls:** Simple (left/right, maybe jump)
- **Note:** Player controls ALL movement - NO idle/automatic wandering

### World Design
- **Structure:** Handcrafted (not procedural)
- **Initial Scope:** 1-2 environments to start
- **Perspective:** Side-scrolling 2D
- **Philosophy:** Quality over quantity, expandable later

### Art Style
- **Visual Style:** Detailed pixel art - beautiful and polished
- **Emphasis:** Atmosphere, scenery, peaceful aesthetics
- **Effects:** Dynamic lighting, weather, ambient animations

### Gameplay Systems
- **Core Loop:** Walk → Discover items → Collect → Unlock new areas
- **Collection:** Simple item gathering (flowers, crystals, artifacts, etc.)
- **NO complex menus** - No nested structures or deep taxonomies
- **Progression:** Unlock new areas/paths, discover items and locations
- **Active Play Only:** Player must actively play - no idle/background progression

## Game Pillars

1. **Peaceful Exploration** - No pressure, no danger, just wander and discover
2. **Flexible Playtime** - Enjoyable in 5 minutes or 5 hours
3. **Player-Controlled** - Player controls all movement and exploration
4. **Beautiful Pixel Art** - Detailed, polished, atmospheric visuals
5. **Simplicity First** - Simple systems, no complex menus or nested structures
6. **Handcrafted Worlds** - Quality over quantity, start small (1-2 environments), expand later
7. **Aimless Discovery** - No quests or objectives, player sets their own pace

## What Players Do

- Walk through handcrafted side-scrolling environments
- Discover items naturally along paths (flowers, crystals, feathers, artifacts)
- Encounter peaceful creatures and magical phenomena
- Collect items (simple system, no complex inventory)
- Unlock new areas/paths through exploration
- Take in beautiful scenery at their own pace

## Technical Direction

- **Framework:** Phaser 3.80.1 (chosen and set up)
- **Build Tool:** Vite 4.5.2
- **Project Structure:** Phaser scenes (Boot, Preload, Game), entities, systems, UI components
- **Art:** Detailed pixel art sprites
- **Controls:** Simple keyboard/touch/gamepad
- **Performance:** Web-optimized, lightweight
- **Structure:** Side-scrolling paths/routes (not free-roam)

## MVP Scope

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

## What's NOT Included

- ❌ Idle/automatic wandering mechanics
- ❌ Complex menus or nested item systems
- ❌ Quests or objectives
- ❌ Combat or danger
- ❌ Time pressure or failure states
- ❌ Procedural generation

## Current Status

**Phase:** Pre-Production / Initial Setup  
**Completed:**
- ✅ Technology stack chosen (Phaser 3)
- ✅ Project structure initialized
- ✅ Basic Phaser setup with scenes and systems

**Next Steps:**
- Define specific environments (which 1-2 to start)
- Create initial GDD
- Implement core exploration mechanics
- Design and create first environment assets

## Key Documents

- `docs/CONCEPT_EXPLORATION.md` - Full exploration concept details
- `PROJECT_PLAN.md` - Overall development roadmap
- `docs/GDD_TEMPLATE.md` - Game Design Document template
- `docs/CAST_N_CHILL_ANALYSIS.md` - Inspiration game analysis

## Inspiration

**Cast n Chill** - Relaxed 2D fishing game (inspiration for casual, collection-focused gameplay, but this game is exploration-focused, not fishing)

---

*Last Updated: [Current Date]*  
*Use this file to quickly understand the game's direction and key decisions without reading all planning documents.*

