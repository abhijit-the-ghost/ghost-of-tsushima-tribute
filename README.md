<div align="center">
  <img width="1200" height="475" alt="Ghost of Tsushima Tribute Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🌸 Ghost of Tsushima — Fan Tribute

A cinematic, interactive fan tribute to **Ghost of Tsushima** by Sucker Punch Productions. Built with React, TypeScript, and Framer Motion — featuring animated sakura particles, a dynamic weather system, character deep-dives, and a fully responsive dark/light mode.

---

## ✨ Features

- 🌸 **Animated Sakura Particles** — floating petals drift across every section
- 🌦️ **Dynamic Weather System** — toggle between Sunny, Rainy, Foggy, and Stormy atmospheres
- 🌙 **Dark / Light Mode** — seamless theme switching with a custom toggle
- 🗡️ **Character Showcase** — interactive cards for Jin Sakai, Lord Shimura, and Khotun Khan with detailed modals
- 📜 **Story Section** — narrative overview of the 1274 Mongol invasion of Tsushima
- ⚔️ **Gameplay Mechanics** — highlights of the Guiding Wind, Standoffs, Ghost Weapons, and Exploration
- 🎞️ **Scroll Animations** — parallax hero, fade-in sections, and staggered reveals via Motion

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 + TypeScript | UI framework |
| Vite 6 | Build tool & dev server |
| Tailwind CSS v4 | Utility-first styling |
| Motion (Framer Motion) | Animations & transitions |
| shadcn/ui | Accessible UI components |
| Lucide React | Icon library |
| Bun | Package manager & runtime |

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) **or** Node.js 18+

### Installation

```bash
# Clone the repo
git clone https://github.com/abhijit-the-ghost/ghost-of-tsushima-tribute.git
cd ghost-of-tsushima-tribute

# Install dependencies
bun install
```

### Running Locally

```bash
bun run dev
```

The app will be available at **http://localhost:3000**.

### Other Commands

```bash
bun run build     # Production build
bun run preview   # Preview the production build
bun run lint      # TypeScript type-check
bun run clean     # Remove the dist folder
```

---

## 📁 Project Structure

```
ghost-of-tsushima-tribute/
├── src/
│   ├── assets/            # Images (hero, characters, etc.)
│   ├── components/
│   │   ├── ui/            # shadcn/ui base components
│   │   ├── SakuraParticles.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── WeatherSystem.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx            # Main application
│   └── index.css          # Global styles & Tailwind imports
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎮 About the Game

> *"Honor died on the beach. The Ghost was born in the shadows."*

**Ghost of Tsushima** (2020) is an action-adventure game developed by Sucker Punch Productions. Set in feudal Japan during the first Mongol invasion of 1274, it follows samurai Jin Sakai as he abandons his code of honor to become a legendary warrior known as "The Ghost."

---

<div align="center">
  <p>A tribute to the masterpiece by <strong>Sucker Punch Productions</strong>.</p>
  <p>Ghost of Tsushima™ and all related assets are property of Sony Interactive Entertainment.</p>
</div>
