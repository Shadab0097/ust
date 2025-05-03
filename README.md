# U.S.T Enterprises - Industrial Equipment Manufacturer Website

A modern, responsive website for U.S.T Enterprises, a steel & iron manufacturer founded in 1970 in Gurgaon, India.

## Technologies Used

- React 18
- Tailwind CSS for styling
- Anime.js for animations
- GSAP for scroll animations
- Three.js / React Three Fiber for 3D components
- React Router for navigation
- Framer Motion for micro-interactions

## Features

- Responsive design that works on all device sizes
- Interactive 3D product showcases
- Smooth animations and transitions
- Product modal with detailed information
- Contact form with validation
- Company timeline with animations
- Modern industrial design system

## Pages

1. **Home** - Full-screen hero, featured product categories, and company introduction
2. **About** - Company history, strengths, timeline, and client list
3. **Products** - Grid of product cards with filtering by category
4. **Contact** - Contact form with animated input effects and company information

## Project Structure

```
/src
  /components      # Reusable UI components
    /3d            # 3D components and viewers
    /home          # Components specific to home page
    /layout        # Layout components (Header, Footer)
    /ui            # General UI components
  /pages           # Page components
  /data            # Mock data files
  /assets          # Static assets
  App.jsx          # Main application component
  main.jsx         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Customization

- Colors and theme can be modified in `tailwind.config.js`
- Product data can be updated in `src/data/products.js`
- 3D models can be added to the `/public` folder and referenced in the product data

## Credits

- Images from [Pexels](https://www.pexels.com/)
- Icons from [Heroicons](https://heroicons.com/)
- 3D component integration using React Three Fiber