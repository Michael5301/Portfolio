import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/path/to/your/entry/file.jsx',
      output: {
        dir: 'dist',
        format: 'es',
      },
    },
    assetsDir: 'public',
    publicDir: 'public',
  },
});
