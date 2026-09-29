---
name: Modern Creative Engineering Portfolio
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#424754'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#525e5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b7774'
  on-tertiary-container: '#f4fffb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e5e1'
  tertiary-fixed-dim: '#bcc9c6'
  on-tertiary-fixed: '#121e1c'
  on-tertiary-fixed-variant: '#3d4947'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
  surface-subtle: '#F3F4F6'
  surface-card: '#FFFFFF'
  accent-mint-tint: '#EFFCF8'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a forward-leaning, trustworthy, and precise identity tailored for modern developers and creative engineers. The aesthetic blends Clean Modernism with subtle soft-tech accents: high clarity, disciplined white space, purposeful contrast, and airy tonal backgrounds.

The interface evokes competence, approachability, and structured ingenuity. Visual friction is minimized through generous spacing, tactile affordances, and light ambient backdrops that let showcased case studies, interactive prototypes, and code artifacts command primary focus.

## Colors

The color system establishes dynamic hierarchy with vibrant digital blue (`#3B82F6`) as the primary interactive driver, contrasted against a deep slate neutral (`#111827`) for high-legibility typography and solid iconography. 

- **Primary (`#3B82F6`)**: Reserved for core call-to-actions, active navigation markers, and focus states.
- **Secondary (`#10B981`)**: Harmonizes with the fresh mint undertones present in `#EFFCF8`, deployed for success badges, available-for-work indicators, and metric highlights.
- **Tertiary (`#EFFCF8`)**: A pale mint glow used for highlight badges, tag backdrops, and active card accents.
- **Neutrals & Surfaces**: Clean white (`#FFFFFF`) serves as canvas and elevation cards, structured alongside light gray (`#F3F4F6`) for section alternations, dividers, and input backgrounds.

## Typography

The type scale combines **Plus Jakarta Sans** for structural headlines and crisp UI labels with **Nunito Sans** for readable body paragraphs. Plus Jakarta Sans brings geometric confidence and technical sharpness to section titles, project names, and key metrics. Nunito Sans provides a warm, natural cadence to case studies, biographies, and descriptions.

On compact viewports (under 768px), display and headline levels compress proportionally (`display-hero-mobile`, `headline-lg-mobile`) to prevent awkward line wrapping and maintain balance with accompanying media.

## Layout & Spacing

This design system uses a 12-column responsive fluid grid pinned to a maximum container width of `1200px` on desktop and desktop-wide viewports. 

- **Breakpoints**:
  - `Mobile` (< 640px): 4 columns, 1rem margins, 1rem gutters.
  - `Tablet` (640px – 1024px): 8 columns, 1.5rem margins, 1.25rem gutters.
  - `Desktop` (> 1024px): 12 columns, 2rem margins, 1.5rem gutters.

Vertical rhythm relies on exponential intervals: `space-xs` and `space-sm` for inline badges, icon gaps, and input padding; `space-md` for standard card content separation; `space-lg` and `space-xl` for section intervals and distinct portfolio project modules.

## Elevation & Depth

Visual hierarchy leverages crisp surface-container differentiation paired with soft ambient diffusion:

- **Level 0 (Flat)**: Background canvas (`#FFFFFF` or `#F3F4F6`), zero shadow.
- **Level 1 (Cards & Modules)**: Background `#FFFFFF`, border `1px solid rgba(17, 24, 39, 0.06)`, shadow `0 1px 3px rgba(17, 24, 39, 0.04), 0 1px 2px rgba(17, 24, 39, 0.02)`.
- **Level 2 (Hover & Elevated Overlays)**: Shadow `0 10px 25px -5px rgba(59, 130, 246, 0.08), 0 8px 10px -6px rgba(17, 24, 39, 0.04)`, border `1px solid rgba(59, 130, 246, 0.2)`.
- **Level 3 (Modals & Floating Navigation)**: Semi-translucent backdrop (`rgba(255, 255, 255, 0.85)` with `12px` blur filter), elevated by `0 20px 25px -5px rgba(17, 24, 39, 0.1), 0 8px 10px -6px rgba(17, 24, 39, 0.05)`.

## Shapes

The design system embraces a **Rounded (Level 2)** geometry:
- Standard buttons, inputs, and list elements apply `0.5rem` (`8px`) border radius.
- Project cards, code preview frames, and modal dialogs use `rounded-lg` (`1rem` / `16px`).
- Floating badges, status pills, and hero avatars scale up to fully pill-shaped or `rounded-xl` (`1.5rem` / `24px`) to create organic contrast against structural rectangular viewports.

## Components

### Buttons
- **Primary**: Solid `#3B82F6` fill with `#FFFFFF` text. Padding `0.625rem 1.25rem`. `roundedness` 2. Smooth scale hover effect with slight shadow boost.
- **Secondary / Ghost**: Transparent fill with `1px solid #E5E7EB` outline, `#111827` text. Hover state shifts to `#F3F4F6` surface.
- **Tertiary Accent**: `#EFFCF8` fill, `#10B981` text, used for live demo triggers and special contact interactions.

### Project & Case Study Cards
- Constructed with `#FFFFFF` background, `rounded-lg` (16px), subtle border `rgba(17, 24, 39, 0.06)`.
- Image/video preview header with a 16:10 aspect ratio.
- Body content includes title (`headline-sm`), brief description (`body-sm`), and a horizontal tag list.
- On hover, cards subtly translateY (-4px) with dynamic primary-tinted ambient glow.

### Chips & Badges
- **Skill / Technology Tag**: `#F3F4F6` background with `#111827` text, `0.25rem 0.625rem` padding, `label-sm` typography, pill-rounded (`9999px`).
- **Availability / Status Chip**: `#EFFCF8` background, `#10B981` label with a pulsing green status dot indicator.

### Input Fields & Contact Elements
- Neutral light gray fill (`#F3F4F6`) or white with `1px solid #E5E7EB`.
- Active focus state transitions border to `#3B82F6` with a `3px` focus ring of `rgba(59, 130, 246, 0.15)`.
- Placeholder text set to `body-md` in muted gray (`#6B7280`).

### Code Snippets & Technical Highlights
- Embedded terminal/syntax containers styled with `#111827` dark background, providing high contrast against the light page body.
- Monospace typographic accents for commit tags, metrics, and API endpoints.