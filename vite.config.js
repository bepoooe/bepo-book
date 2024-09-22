// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/<bepo-book>/', // Add this line
  plugins: [react()],
});
