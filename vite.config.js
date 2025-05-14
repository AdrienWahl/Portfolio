import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // C'est ici que tu as raison

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // Ajouter le plugin Tailwind correctement
  ],
})