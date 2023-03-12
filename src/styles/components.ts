import { ThemeOptions } from '@mui/material'

export const components: ThemeOptions['components'] = {
  MuiCssBaseline: {
    styleOverrides: ({ palette }) => ({
      '::-webkit-scrollbar': {
        width: '0.5rem',
        height: '0.5rem',
      },
      '::-webkit-scrollbar-thumb': {
        transition: '.3s ease all',
        borderColor: 'transparent',
        backgroundColor: palette.divider,
        zIndex: 40,
      },

      body: {
        height: '100vh',
      },

      '#root': {
        height: '100vh',
      },
    }),
  },
  MuiContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      }),
      disableGutters: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
  MuiDivider: {
    defaultProps: {
      light: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
      fullWidth: true,
    },
    styleOverrides: {
      root: {
        marginTop: 8,
      },
    },
  },
}
