# Design Guidelines: Minimal Hello World Page

## Design Approach
**Selected Approach:** Minimal Utility-Focused
Given the explicit requirement for "super simple, nothing more," this design prioritizes clean presentation with zero visual noise, creating a foundation ready for future content uploads.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Background: 0 0% 100% (Pure white)
- Text: 0 0% 9% (Near black)

**Dark Mode:**
- Background: 0 0% 9% (Near black)
- Text: 0 0% 98% (Near white)

### B. Typography
**Font Family:** System font stack
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```
**Text Specifications:**
- "Hello World" text: text-4xl to text-6xl (responsive)
- Font weight: font-medium
- Letter spacing: tracking-tight

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8
- Container: Full viewport height (h-screen)
- Centering: Flexbox with justify-center and items-center
- Padding: Minimal (p-4 for mobile safety)

### D. Component Library
**Single Text Element:**
- Centered "Hello World" message
- Responsive text sizing (4xl mobile → 6xl desktop)
- Smooth transitions for dark mode toggle (if implemented)

### E. Interaction & Animation
- NO animations
- NO hover states
- NO interactive elements beyond basic dark mode toggle
- Clean, instant rendering

## Page Structure
**Single View Layout:**
- Full-screen centered container
- Single text element: "Hello World"
- Optional: Subtle dark mode toggle in corner (minimal icon)

## Technical Specifications
- Semantic HTML: Use `<main>` for content wrapper
- Accessibility: Proper heading hierarchy (`<h1>` for Hello World)
- Viewport: 100vh centered display
- No images required
- No additional sections

## Dark Mode Implementation
Consistent system with:
- Automatic detection via `prefers-color-scheme`
- Clean background/text color inversion
- No transition animations (instant swap)

**Design Philosophy:** Absolute minimalism - a clean canvas ready for future content without visual interference.