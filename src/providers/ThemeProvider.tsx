import React from 'react'
import { useSelector } from 'react-redux'
import { PropsWithChildren } from 'react'
import { theme as appTheme } from '@styles'
import { selectUserColorMode } from '@selectors'
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorMode = useSelector(selectUserColorMode)

  const theme = createTheme({
    ...appTheme,
    palette: {
      mode: colorMode,
    },
  })

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
