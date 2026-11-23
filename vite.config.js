import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

function copyStaticDirsPlugin() {
  return {
    name: 'copy-static-dirs-plugin',
    closeBundle() {
      const dirs = ['staff', 'nfc']
      for (const dir of dirs) {
        const src = path.resolve(__dirname, dir)
        const dest = path.resolve(__dirname, `dist/${dir}`)
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true })
        }
      }
    }
  }
}

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    copyStaticDirsPlugin()
  ],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  }
})
