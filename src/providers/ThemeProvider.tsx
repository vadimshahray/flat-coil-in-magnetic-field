import React from 'react'
import { theme } from '@styles'
import { PropsWithChildren } from 'react'
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
