# Idle/Casual Game Design Considerations

## Core Philosophy

**Goal:** Create a game that's enjoyable whether played for 5 minutes or 5 hours, with mechanics that support both active and idle play.

## Current Game Context

**Game Type:** Fantasy Exploration Simulator - Side-scrolling exploration game

**Note:** Idle mechanics are NOT part of the current version. This game requires active player control - the player must play to explore and discover. No automatic wandering or background progression.

## Key Design Principles

### 1. Flexible Engagement
- **Active Play:** Meaningful actions available when player is engaged
- **Idle Play:** Progress continues (or can continue) when player is away
- **Seamless Transition:** Easy to switch between active and idle modes

### 2. Low Pressure, High Satisfaction
- No time pressure or stress
- Rewards feel meaningful but not required
- Player never feels "behind" or penalized for taking breaks

### 3. Meaningful Progression
- Clear advancement paths
- Visible progress indicators
- Unlockables that feel rewarding
- Multiple progression systems (if applicable)

## Idle Mechanics to Consider

### Offline Progression
- **How it works:** Game calculates progress based on time away
- **Implementation:** Store timestamp when player leaves, calculate rewards on return
- **Considerations:** 
  - Cap offline time? (e.g., max 8 hours of offline progress)
  - Visualize offline progress clearly
  - Make return feel rewarding ("You earned X while away!")

### Background Progression
- **How it works:** Game continues running in background (web tab, mobile app)
- **Implementation:** Use requestAnimationFrame or timers
- **Considerations:**
  - Battery usage (especially mobile)
  - Performance impact
  - Browser tab throttling (tabs in background may slow down)

### Hybrid Approach
- **Active gameplay** for immediate rewards and engagement
- **Idle systems** for passive progression
- **Best of both:** Players can actively play OR let it run idle

## Session Length Design

### 5-Minute Session Goals
- Quick check-in feels rewarding
- Clear "what's new" indicators
- Fast collection of idle rewards
- Quick active gameplay loop available
- Easy to understand current state

### 5-Hour Session Goals
- Deep progression available
- Multiple systems to engage with
- Active gameplay remains engaging
- Clear goals and milestones
- Satisfying long-term progression

## Technical Considerations

### Performance
- **Idle games run continuously** - optimize for long-running sessions
- **Memory management** - prevent leaks over hours of play
- **Battery efficiency** - especially important for mobile
- **Background throttling** - browsers may slow background tabs

### Save System
- **Frequent auto-save** - never lose progress
- **Cloud save** - sync across devices (for mobile/Steam)
- **Save format** - efficient, versioned, recoverable

### Time Management
- **Server time vs. client time** - prevent cheating by changing system clock
- **Time zones** - handle correctly for global audience
- **Day/night cycles** - if applicable, handle time correctly

## Progression Systems

### Common Idle Game Progression Types

1. **Resource Generation**
   - Passive resource income
   - Upgrades increase generation rate
   - Multiple resource types create complexity

2. **Unlock Trees**
   - New content unlocks as player progresses
   - Creates sense of discovery
   - Prevents overwhelming new players

3. **Prestige/Reset Systems**
   - Optional resets for permanent bonuses
   - Extends game longevity
   - Rewards long-term players

4. **Collection Systems**
   - Collectibles, achievements, variants
   - Provides long-term goals
   - Appeals to completionists

## UI/UX for Idle Games

### Information Density
- Show important info at a glance
- Hide complexity behind expandable sections
- Clear visual hierarchy

### Feedback Systems
- **Visual feedback** for all actions
- **Number animations** (counting up feels satisfying)
- **Particle effects** for rewards
- **Sound effects** (optional, can be muted)

### Return Rewards
- When player returns after time away, make it feel special
- Clear visualization of what was earned
- "Claim" buttons feel satisfying

## Balancing Active vs. Idle

### Active Play Should Feel Rewarding
- Active play should be faster/more efficient than pure idle
- But not so much that idle feels pointless
- Balance: Active play is better, but idle is still meaningful

### Idle Should Feel Meaningful
- Idle progress shouldn't be trivial
- But shouldn't be so good that active play feels pointless
- Balance: Idle is good, but active play is better

### Hybrid Approach
- Best of both worlds
- Players can choose their playstyle
- Both paths feel valid and rewarding

## Inspiration: Cast n Chill Analysis

### What Works Well
- Relaxed atmosphere
- Simple, clear mechanics
- Pixel art aesthetic
- Casual, no-pressure gameplay

### Potential Improvements/Unique Angles
- [To be explored] What can we do differently?
- [To be explored] What mechanics could be added?
- [To be explored] What's our unique hook?

## Implementation Checklist

### Core Systems
- [ ] Time tracking system
- [ ] Offline progress calculation
- [ ] Auto-save system
- [ ] Progression tracking
- [ ] Resource management

### UI Systems
- [ ] Idle progress display
- [ ] Return reward screen
- [ ] Progress indicators
- [ ] Number animations
- [ ] Visual feedback

### Technical Systems
- [ ] Performance optimization
- [ ] Memory management
- [ ] Save/load system
- [ ] Time validation (anti-cheat)
- [ ] Background processing

## Questions to Answer

1. **How much offline progress?** (Unlimited? Capped? How long?)
2. **Active vs. idle balance?** (How much better is active play?)
3. **Prestige system?** (Reset for bonuses? Or linear progression?)
4. **Multiple progression paths?** (Resources? Unlocks? Collections?)
5. **Social features?** (Leaderboards? Sharing? Or solo experience?)

---

*This document should evolve as the game concept becomes clearer*

