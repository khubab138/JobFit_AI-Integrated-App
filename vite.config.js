import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  base:"/JobFit_AI-Integrated-App",
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: path.resolve(__dirname, 'index.html'),
  //       404: path.resolve(__dirname, 'index.html'), // this copies index.html as 404.html
  //     },
  //   },
  // },

})
