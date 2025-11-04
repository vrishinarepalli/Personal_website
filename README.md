# Vrishin Arepalli - Portfolio Website

A modern, animated portfolio website built with React, Vite, and Framer Motion, featuring advanced animations and smooth transitions.

## Features

- **Advanced Animations**: Built with Framer Motion for smooth, professional animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive UI**: Hover effects, scroll animations, and dynamic transitions
- **Liquid Chrome Effect**: Custom WebGL background using OGL
- **Loading States**: Smooth page transitions and loading animations
- **Optimized Performance**: Built with Vite for fast loading and optimal performance

## Technologies Used

- React 19
- Vite 7
- Framer Motion 12
- OGL (WebGL library)
- CSS3 with modern features

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vrishinarepalli/Personal_website.git
cd Personal_website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Manual Deployment

To manually deploy to GitHub Pages:

```bash
npm run deploy
```

## Project Structure

```
Personal_website/
├── public/               # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── .github/
│   └── workflows/       # GitHub Actions workflows
└── vite.config.js       # Vite configuration
```

## Animation Features

- **Scroll Animations**: Components animate as they enter the viewport
- **Stagger Effects**: Sequential animations for lists and grids
- **Hover Interactions**: Smooth hover effects on cards and links
- **Loading State**: Animated spinner on initial page load
- **Header Scroll Effect**: Dynamic header style changes on scroll
- **3D Transforms**: Subtle 3D rotations on card reveals

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Vrishin Arepalli
- Email: vrishinarepallirao@gmail.com
- LinkedIn: [vrishin-arepalli-3b5428265](https://linkedin.com/in/vrishin-arepalli-3b5428265)
- GitHub: [Varepall](https://github.com/Varepall)

## Acknowledgments

- Framer Motion for animation capabilities
- OGL for WebGL effects
- Vite for the blazing fast build tool
