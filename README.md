# Juan Sebastián Vassallo — Personal Website

This is the source code for my personal professional website as a composer, sound/media artist, and researcher interested in artificial intelligence and computational creativity. The site showcases my artistic work, research, and ongoing projects, and serves as a portfolio for my web development skills.

## Overview

The website is a single-page application (SPA) built with **React** and modern JavaScript. It features a custom design, responsive layout, and multimedia integration (audio, video, and embedded players). The content highlights my compositions, records, texts, CV, and projects, with a focus on experimental music, AI, and interdisciplinary art.

## Features

- **React SPA**: Built using [Create React App](https://github.com/facebook/create-react-app) for fast development and optimized production builds.
- **Routing**: Uses `react-router-dom` for client-side navigation between sections (Home, Bio, CV, Compositions, Records, Projects, Texts, Contact).
- **Component-based architecture**: Modular React components for each section and content type (e.g., `Composition`, `Record`, `Project`, `Footer`).
- **Responsive Design**: Custom CSS with media queries for desktop, tablet, and mobile layouts.
- **Multimedia Integration**:
  - Embedded Spotify and Bandcamp players for music releases ([`Record`](src/components/Record.js))
  - Embedded YouTube videos for compositions ([`Composition`](src/components/Composition.js))
  - Audio playback for electroacoustic works ([`Composition_audio`](src/components/Composition_audio.js))
- **Custom Styling**: Handcrafted CSS ([`App.css`](src/css/App.css)), including custom fonts and visual effects.
- **Accessibility**: Semantic HTML and accessible navigation.
- **Social Links**: Footer with links to Facebook, Instagram, Bandcamp, and Spotify.

## Technology Stack

- **Frontend**: React (functional components, hooks)
- **Routing**: react-router-dom
- **Transitions**: react-transition-group for smooth page transitions
- **Audio**: react-audio-player for audio playback
- **Icons**: react-icons for social media and music platform icons
- **Styling**: Custom CSS, webfonts, and responsive design
- **Deployment**: Static site, ready for deployment on any static hosting (e.g., GitHub Pages, Netlify, Vercel)

## Project Structure

```
website/
├── public/                  # Publicly accessible files
│   ├── index.html           # Main HTML file
│   └── favicon.ico          # Favicon
│
├── src/                     # Source files
│   ├── components/          # Reusable components
│   │   ├── Composition.js   # Composition component
│   │   ├── Record.js        # Record component
│   │   ├── Project.js       # Project component
│   │   └── Footer.js        # Footer component
│   │
│   ├── css/                 # CSS files
│   │   └── App.css          # Main CSS file
│   │
│   ├── data/                # Data files (e.g., for projects, compositions)
│   │   └── projects.json    # Example data file
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── useWindowSize.js # Example hook
│   │
│   ├── App.js               # Main App component
│   ├── index.js             # Entry point
│   └── serviceWorker.js     # Service worker for PWA
│
├── .gitignore               # Git ignore file
├── package.json             # NPM package file
└── README.md                # This file
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/website.git
   cd website
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

4. **Open your browser** and go to [http://localhost:3000](http://localhost:3000) to see the website.

5. **Edit the source files** in the `src/` directory to make changes to the website. The page will automatically reload when you save your changes.

6. **Build the project for production**:

   ```bash
   npm run build
   ```

   The optimized production build will be generated in the `build/` directory.

7. **Deploy the `build/` directory** to your preferred static hosting service (e.g., GitHub Pages, Netlify, Vercel).

## Customization

To customize the website for your own use, you can:

- **Update the content**: Modify the text, images, and media links in the `src/data/` directory and components.
- **Change the styles**: Edit the CSS files in the `src/css/` directory to change the look and feel.
- **Add or remove sections**: Modify the component structure in the `src/components/` directory to add or remove sections as needed.
- **Update the routing**: Change the routes in the `src/App.js` file to match your desired navigation structure.

## Acknowledgments

- Inspired by the need for a personal portfolio website that reflects my artistic and professional identity.
- Built with a focus on clean design, usability, and performance.
- Utilizes modern web technologies and best practices for a seamless user experience.

## License

Copyright @ Juan S. Vassallo 2025. All rights reserved.

## Preview

Below are screenshots of key sections of the website:

|                 Bio Section                 |                   Records Section                   | Work/Projects Section |
| :-----------------------------------------: | :-------------------------------------------------: | :-------------------: |
| ![Bio](public/img/juanvassallo.com_bio.png) | ![Records](public/img/juanvassallo.com_records.png) |
