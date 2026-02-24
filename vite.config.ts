import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions:{
      input: {
        main: resolve(__dirname, 'index.hmtl'),
        project: resolve(__dirname, 'pages/project.html'),
      }
    }
  }
})