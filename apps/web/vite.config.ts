import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { alias } from 'config/vite/index.mjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: ['e2e/**']
  },
  resolve: {
    alias
  }
})
