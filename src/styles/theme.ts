import { components } from './components'
import { createTheme } from '@mui/material'

export const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Jost, sans-serif',
  },
  components,
})
