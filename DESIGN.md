# Design System — GTA VI Guide Hub

## Aesthetic stance
Dark, fast, tool-like. Game UI energy without gamer clutter. Think MapGenie meets a clean documentation site — high contrast for readability, intentional whitespace to let content breathe, zero decoration.

## Type
- Heading: Inter, 700, h1: 2rem / h2: 1.5rem / h3: 1.25rem
- Body: Inter, 400, 1.125rem, line-height 1.7, max-width 72ch
- Mono: JetBrains Mono, for game commands/code only

## Color
- Surface: #0a0a0b — page background (near-black, not pure black)
- Surface alt: #141416 — cards, sidebar, nav
- Surface raised: #1c1c1f — hover states, modals
- Text primary: #e4e4e7
- Text muted: #71717a
- Accent: #f59e0b — amber, single accent used for links/CTAs/highlights
- Success: #22c55e / Warning: #f59e0b / Danger: #ef4444
- Border: #27272a — subtle dividers

## Spacing
- Base unit: 4px
- Section vertical rhythm: 48px (12 units)
- Card padding: 16px (4 units)
- Content max-width: 720px

## Motion
- Default transition: 150ms ease-out
- What animates: hover states on links/buttons, language toggle, mobile menu
- What doesn't: page load, content, scroll

## What this system rejects
- No gradients — anywhere
- No glassmorphism or blur effects
- No neon or glow effects (this isn't a gaming peripheral site)
- No auto-play anything
- No popups or overlays (no "subscribe now" modals)
- No hamburger menu on desktop — nav is always visible
- No more than one accent color
- No colored backgrounds on cards — surface-alt only
