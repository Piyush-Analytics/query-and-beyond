import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    server: {
    host: true,   // allows LAN access
    port: 5173,   // optional, default is 5173
  },
<<<<<<< HEAD
   base: "/query-and-beyond/",
=======
   base: "/",
>>>>>>> 8e3f80b3870956412b7ec665a6361f56f258b56e
})
