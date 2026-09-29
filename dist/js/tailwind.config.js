// Tailwind Play CDN runtime config.
// Loaded in <head> AFTER <script src="https://cdn.tailwindcss.com"></script>.
// Shared by index.html and thankyou_page.html (single source of truth).
// NOTE: this is NOT the legacy Node config (root tailwind.config.js) — that one
// is only used by the unmigrated sandbox.html CLI build.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(230deg, rgba(255, 255, 255, 1) 44%, rgba(198, 230, 225, 1) 67%, rgba(27, 156, 133, 1) 100%)",
        hero_dark:
          "linear-gradient(230deg, rgba(15,23,42,1) 44%, rgba(15,23,42,1) 70%, rgba(27,156,133,1) 100%)",
      },
      colors: {
        primary: "#1B9C85",
        secondary: "#4C4C6D",
        third: "#F9ED69",
        dark: "#0f172a",
        blue_button: "#1b439c",
      },
      boxShadow: {
        "glow-rose": "0 10px 25px -5px rgba(244, 63, 94, 0.35)",
        "glow-brand": "0 10px 25px -5px rgba(27, 156, 133, 0.35)",
        "card-soft":
          "0 20px 40px -15px rgba(15, 23, 42, 0.06), 0 0 1px 1px rgba(15, 23, 42, 0.04)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
};
