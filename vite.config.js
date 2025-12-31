import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { htmlPrerender } from 'vite-plugin-html-prerender' // <--- FIXED HERE
import path from 'path'

// 1. Your Product Slugs
const productSlugs = [
  'paint-shop-line',
  'hydro-turbine',
  'dust-collector-system',
  'ribbon-blender-machine',
  'screw-conveyor',
  'scissor-lift',
  'water-curtain-paint-booth',
  'atta-chakki-machine',
  'sheet-rolling-machine',
  'telescopic-belt-conveyor',
  'vibro-de-stoner',
  'hammer-mill',
  'blower-fan',
  'tensile-shed',
  'seed-cleaning-machine'
];

// 2. Define routes
const routesToPrerender = [
  '/',
  '/about',
  '/products',
  '/contact',
  '/quote',
  ...productSlugs.map(slug => `/products/${slug}`)
];

export default defineConfig({
  plugins: [
    react(),
    htmlPrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: routesToPrerender,
      rendererOptions: {
        // Wait 1.5s for React to load before saving HTML
        renderAfterTime: 1500,
        headless: true
      },
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ],
})