import React from 'react'
import { Snackbar } from '@components'
import { OptionsObject } from 'notistack'
import { SNACKBAR_DURATION_MS } from '@constants'

const defaultOptions: OptionsObject = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  autoHideDuration: SNACKBAR_DURATION_MS,
}

export const errorSnackbar = (
  title: string,
  options?: OptionsObject,
): OptionsObject => ({
  content: (key, message) => (
    <Snackbar
      id={key.toString()}
      variant='error'
      title={title}
      message={message?.toString() ?? ''}
    />
  ),
  ...defaultOptions,
  ...options,
})

export const infoSnackbar = (
  title: string,
  options?: OptionsObject,
): OptionsObject => ({
  content: (key, message) => (
    <Snackbar
      id={key.toString()}
      variant='info'
      title={title}
      message={message?.toLocaleString() ?? ''}
    />
  ),
  ...defaultOptions,
  ...options,
})
