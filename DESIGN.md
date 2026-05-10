# QuickGig Design System

## Visual Direction
Premium dark-mode gig marketplace combining Uber's directness, LinkedIn's trust, and Fiverr's vibrancy. Glassmorphic cards, electric accents, smooth micro-interactions. Action-oriented and trustworthy.

## Palette (OKLCH)

| Semantic | Light                | Dark                 | Purpose                        |
|----------|----------------------|----------------------|--------------------------------|
| Primary  | L:0.54 C:0.22 H:265  | L:0.72 C:0.21 H:265  | CTAs, primary actions          |
| Secondary| L:0.62 C:0.21 H:285  | L:0.68 C:0.19 H:285  | Alternative, secondary UI      |
| Accent   | L:0.72 C:0.22 H:204  | L:0.74 C:0.21 H:204  | Highlights, badges, trends     |
| Background | L:0.99 C:0 H:0    | L:0.14 C:0.02 H:265  | Primary surface                |
| Neutral  | L:0.92 C:0 H:0      | L:0.28 C:0.03 H:265  | Borders, dividers, muted text  |

## Typography

| Layer    | Font             | Weight   | Use Case                  |
|----------|------------------|----------|---------------------------|
| Display  | Space Grotesk    | 700      | Hero, section headings    |
| Body     | Figtree          | 400-600  | Body text, UI controls    |
| Mono     | JetBrains Mono   | 400-600  | Code, technical details   |

## Structural Zones

| Zone    | Background                        | Border       | Purpose                                 |
|---------|------------------------------------|--------------|------------------------------------------|
| Header  | dark (0.18 0.03 265)             | 0.26/0.92    | Navigation, persistent top              |
| Hero    | dark bg with accent gradient      | none         | High-impact entry point                 |
| Content | dark (0.14 0.02 265)             | subtle       | Main flow, sections                     |
| Card    | glass-card (white/8, blur)       | white/10     | Job listings, profiles, info blocks     |
| Footer  | darker (0.12 0.02 265)           | 0.26/0.92    | Links, legal, social                    |

## Component Patterns

- **Buttons**: Large, prominent. Primary/secondary/accent variants. Active: scale 95%. Hover: +10% lightness.
- **Cards**: Glassmorphic (rgba(255,255,255,0.08) + backdrop blur). Hover elevation + border lightening.
- **Badges**: Emerald for verified/complete, cyan for trending/urgent. Capsule, semi-transparent backgrounds.
- **Text**: Gradient accents on headlines (primary → accent). Trust signals always visible.
- **Input**: Dark backgrounds (0.26 C:0.04 H:265), subtle borders, focus ring in primary.

## Motion & Interactions

- **Transitions**: All 0.3s cubic-bezier(0.4, 0, 0.2, 1) (smooth, intentional).
- **Entrance**: Slide-in-up + fade-in for cards (0.5s), staggers for lists.
- **Hover**: Card elevation, border lightening, button scale 102%.
- **Loading**: Pulse-glow animation on placeholders or badges.
- **Decorative**: Float animation for floating UI elements (3s infinite).

## Spacing & Rhythm

- **Grid**: 8px base (8, 16, 24, 32, 48, 64, 80).
- **Density**: Compact mobile (4px gutters), relaxed desktop (8px+).
- **Cards**: 16px internal padding minimum, 24px between sections.

## Constraints

- No generic AI aesthetics — all colors intentional for gig marketplace vibe.
- No full-page gradients — use accent gradients on text/CTAs only.
- No rainbow palettes — primary, secondary, accent + emerald for success.
- Glassmorphism on cards only, not entire sections.
- Micro-interactions choreographed, not scattered.

## Signature Detail

Electric cyan accent (#00C2FF / L:0.72 C:0.22 H:204) used sparingly: CTA button hovers, trending badges, active states. Creates distinctive, premium feel vs. generic fintech UIs. Combined with glassmorphic cards + Space Grotesk headings = distinctive QuickGig identity.
