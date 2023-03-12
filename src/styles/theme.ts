import { createTheme } from '@mui/material'

export const theme = createTheme({
  breakpoints: {
    values: {
      sm: 7000,
      md: 7000,
      lg: 7000,
      xs: 7000,
      xl: 7000,
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Jost, sans-serif',
  },
})
