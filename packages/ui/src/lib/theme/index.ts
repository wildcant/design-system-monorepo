import { extendTheme, CssVarsProvider } from '@mui/joy'

const black = {
  '50': '#f6f6f6',
  '100': '#e7e7e7',
  '200': '#d1d1d1',
  '300': '#b0b0b0',
  '400': '#888888',
  '500': '#6d6d6d',
  '600': '#5d5d5d',
  '700': '#4f4f4f',
  '800': '#454545',
  '900': '#000000de',
}

const white = {
  '50': '#000000de',
  '100': '#454545',
  '200': '#4f4f4f',
  '300': '#5d5d5d',
  '400': '#6d6d6d',
  '500': '#888888',
  '600': '#b0b0b0',
  '700': '#d1d1d1',
  '800': '#e7e7e7',
  '900': '#f6f6f6',
}

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: black,
      },
    },
    dark: {
      palette: {
        primary: white,
      },
    },
  },
})

export const ThemeProvider = CssVarsProvider
export { ThemeToggle } from './ThemeToggle'
