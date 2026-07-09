import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        prettier: false,
        svgo: true,
        titleProp: true,
        ref: true,
      },
      include: '**/*.svg',
      exclude: 'node_modules/**',
    }),
  ],
  optimizeDeps: {
    include: ['@vitejs/plugin-react', 'vite-plugin-svgr'],
  },
});