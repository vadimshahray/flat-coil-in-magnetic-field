import React from 'react'
import { SnackbarContent } from 'notistack'
import { Alert, AlertColor, AlertTitle } from '@mui/material'

export type SnackbarProps = {
  id: string
  title: string
  message: string
  variant: AlertColor
}

export const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  ({ title, message, variant, ...props }, ref) => {
    return (
      <SnackbarContent ref={ref} {...props}>
        <Alert severity={variant}>
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </SnackbarContent>
    )
  },
)
