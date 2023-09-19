import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, theme } from 'ui/theme'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} defaultColorScheme="dark">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
