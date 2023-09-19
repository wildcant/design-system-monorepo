import { defineConfig } from 'vite'
// import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import fs from 'fs'

const files = fs.readdirSync('./src/lib').filter(f => !f.includes('.ts'))

const components = files.reduce((obj, component) => {
  obj[component.split('.')[0]] = `src/lib/${component}/index.ts`

  return obj
}, {})

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: components,
      name: 'ui',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react(), dts({ insertTypesEntry: true })],
})
