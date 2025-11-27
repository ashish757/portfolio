# Portfolio Website

A modern, minimal portfolio website built with React and TypeScript featuring unique scroll-based animations where elements slide, rotate, and fade in/out of the viewport.

## Features

- **No visible scrollbar** - Hidden scrollbar for a clean aesthetic
- **Scroll-based animations** - Elements animate in/out rather than traditional scrolling
- **Smooth transitions** - Using Framer Motion for fluid animations
- **Responsive design** - Mobile, tablet, and desktop friendly
- **Accessible** - Keyboard navigation and screen reader support

## Sections

1. **Hero** - Full-screen introduction with animated elements
2. **Projects** - Showcase of 3 sample projects with image carousel
3. **Skills** - Categorized skills display (Frontend, Backend, UI/UX, DSA)
4. **Activities** - Social links and achievements
5. **Contact** - Contact form and information

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- CSS Modules

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/ashish757/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Build

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/
│   ├── Hero/           # Landing section
│   ├── Projects/       # Projects showcase
│   ├── Skills/         # Skills display
│   ├── Activities/     # Social & activities
│   ├── Contact/        # Contact form
│   └── common/         # Reusable components
├── hooks/
│   └── useScrollSection.ts  # Custom scroll hook
├── data/
│   └── portfolioData.ts     # Portfolio content
├── types/
│   └── index.ts             # TypeScript types
├── App.tsx
├── App.css
├── main.tsx
└── index.css
\`\`\`

## Navigation

- **Scroll** - Navigate between sections
- **Arrow Keys** - Up/Down to navigate
- **Page Up/Down** - Navigate sections
- **Home/End** - Jump to first/last section
- **Touch** - Swipe on mobile devices
- **Section Nav** - Click dots on the right side

## License

MIT
