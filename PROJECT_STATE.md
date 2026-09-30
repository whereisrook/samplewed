# Project State: Luxury Editorial Wedding RSVP Website

- **Repository:** https://github.com/whereisrook/samplewed
- **Hosting:** GitHub Pages (Root branch: `main`)
- **Tech Stack:** Vanilla HTML5, CSS3, JavaScript (Clean 3-file architecture: `index.html`, `style.css`, `script.js`)

## Design & Aesthetic Direction
- **Style:** Wedvite-inspired editorial luxury (full-bleed visuals, warm linen tones, subtle glassmorphism, cinematic typography).
- **Typography:** 
  - Display / Names: `Italiana` (Serif)
  - Headers / Eyebrows: `Cinzel` (Caps Serif)
  - Body / Inputs: `Plus Jakarta Sans`
- **Color Palette:**
  - Background: Cream `#fbf9f5`
  - Text & Accents: Charcoal `#1c1a19`, Muted Gold `#c5a065`, Sand `#e6ded6`
  - Attire Swatches: Alabaster (`#e8ded4`), Warm Sand (`#cbb49f`), Muted Sage (`#8b9982`), Deep Taupe (`#5b4a3f`)

## Implemented Architecture & Views
1. **View 1 (`#page-envelope`):** 
   - 3D-styled unsealing envelope animation with a wax seal button (`#waxSeal`).
   - Unfolds to show an invitation letter before smoothly transitioning into the main page.
2. **View 2 (`#page-main`):**
   - Full-bleed hero carousel (`100vh`) with editorial text overlays, indicator progress bars, and auto-rotation.
   - Editorial RSVP form (Name, Attending segment, guest count, wishes/dietary notes) currently in preview mode.
   - Gifting / Wishing Well section with a dedicated blue GCash trigger button.
   - Floating navigation bar for quick jumps.
3. **View 3 (`#page-details`):**
   - Multi-tab itinerary/timeline, attire guidelines with color palette circles, and venue/map image slots.
4. **Modal Component (`#gcashModal`):**
   - Pop-up modal containing QR code placeholder, account name (`S*** L.`), and one-tap copy button for the GCash number.

## Current Status & Next Steps
- [x] Front-end visual layout, animations, and tabbed/multi-page routing complete.
- [ ] Replace image placeholders with real assets (pre-nup photos, GCash QR, transparent Canva florals) in an `/assets` directory.
- [ ] Connect RSVP form to Google Sheets via Google Apps Script webhook for live response tracking.
