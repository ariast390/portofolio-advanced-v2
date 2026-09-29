# AGENTS.md — Project Guide & Rules

Personal portfolio site for **Aria Sena Trimulia** ("AriaBlog's"). Static single-page application (`index.html`) hosted on GitHub Pages with embedded third-party integrations.

---

## 1. Quick Tech Stack Summary

- **Markup & Styling**: HTML5, Tailwind CSS v3 via **Play CDN** (`cdn.tailwindcss.com` with `dist/js/tailwind.config.js`), Flowbite v1.6.5 (CDN), Font Awesome, Google Fonts (Nunito).
- **Scripts & Logic**: Vanilla JS (`dist/js/`), Firebase v9 Modular SDK (Realtime DB for likes/dislikes), AOS (Animate on Scroll).
- **Backend Services**: FormSubmit.co (Contact form), Google Analytics (`gtag.js`).
- **Dev Tools**: Prettier with `prettier-plugin-tailwindcss`.

_Note: No framework, bundler, server-side build step, or Node backend required for runtime. `dist/output.css` and root `tailwind.config.js` are LEGACY/UNUSED for `index.html`._

---

## 2. Directory & Important File Mapping

portofolio-advanced/
├── index.html # Main single-page portfolio
├── thankyou_page.html # Redirect page after contact form submit
├── sandbox.html # Testing page (uses legacy compiled CSS)
├── dist/
│ ├── js/
│ │ ├── script.js # Nav, dark mode toggle, scroll-to-top, AOS.init()
│ │ ├── skills.js # Skills section filter, search, & copy summary
│ │ ├── tailwind.config.js# Runtime Tailwind CDN configuration (Shared)
│ │ ├── firebase-like.js # Firebase Realtime DB like counter (ES Module)
│ │ └── gtag.js # Google Analytics initialization
│ ├── img/ # Visual assets & icons
│ └── files/Cv-aria.pdf # Downloadable CV
└── src/
└── styles.css # Custom CSS animations, gradients, wave effects

---

## 3. UI/UX & Design Guidelines (Strict Standards)

To keep the site looking **modern, crisp, and professional**, strictly follow these rules:

### A. Zero "Emoticon Slop" & Clean Visuals

- **NO Emoji Overuse**: Do NOT use emojis as visual decoration, section headers, list bullets, or button icons (e.g., ❌ `🚀 Skills`, `🔥 About Me`, `⚡ Performance`).
- **Font Awesome / SVG Only**: Use Font Awesome icons (`<i class="fa-solid fa-..."></i>`) or inline clean SVGs for UI symbols.
- **Allowed Emoji Exceptions**: Only explicit contextual micro-elements (e.g., the hand-wave animation in the Hero greeting 👋).

### B. Modern UI Aesthetic

- **Color Identity**: Primary brand green `#1B9C85` (`primary`), Dark surface `#1A1E29` / `#242B3B` (`dark`), Subtle secondary gray `#64748B`.
- **Borders & Elevation**: Subtle borders (`border border-slate-200 dark:border-slate-800`), glassmorphism overlays (`backdrop-blur-md bg-white/80 dark:bg-dark/80`), soft shadows (`shadow-sm` or `shadow-md`). Avoid heavy, harsh drop-shadows.
- **Typography & Layout**: Clear hierarchy with bold titles and soft muted body text (`text-slate-600 dark:text-slate-400`). Use clean grid or flex layouts with consistent gap spacing (`gap-4`, `gap-6`).
- **Micro-Interactions**: Smooth hover effects (`transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`), clear focus rings, and clean state feedback.

---

## 4. Key Architectural Rules for AI Agents

1. **No Runtime Rebuild Required**: `index.html` uses Tailwind Play CDN. Editing Tailwind classes takes effect immediately on browser refresh.
2. **Shared Tailwind Config**: Always update `dist/js/tailwind.config.js` if adding custom colors, theme extensions, or dark mode classes used in `index.html` or `thankyou_page.html`.
3. **Preserve Section Markers**: Keep HTML section comments intact (e.g., `<!-- about me section -->` ... `<!-- about me section end -->`).
4. **JS Organization**: Do NOT put inline `<script>` logic directly in HTML files. Put JS in `dist/js/` and link it.
5. **Script Execution Order**:
   - `cdn.tailwindcss.com` BEFORE `dist/js/tailwind.config.js`
   - `aos.js` BEFORE `dist/js/script.js` (which calls `AOS.init()`)
   - Firebase scripts must use `type="module"`.
6. **Prettier Tailwind Class Sorting**: Retain standard utility class sorting order when writing HTML.
7. **IDs & Handlers**: Do not rename DOM IDs or Flowbite data attributes (`data-modal-target`, `data-accordion`) without updating corresponding JS selectors.

---

## 5. Summary of Recent Changes

- **Play CDN Migration**: Removed Node build step dependency for `index.html`.
- **Modular JS Refactoring**: Extracted all script blocks into `dist/js/` modules (`tailwind.config.js`, `skills.js`, `gtag.js`).
- **Skills Section Redesign**: Dashboard-style 2-column layout, metric snapshot cards, liv
