import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { alias } from 'config/vite/index.mjs' //eslint-disable-line
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  test: {
    environment: 'jsdom',
    exclude: ['e2e/**']
  },
  resolve: {
    alias
  }
})
