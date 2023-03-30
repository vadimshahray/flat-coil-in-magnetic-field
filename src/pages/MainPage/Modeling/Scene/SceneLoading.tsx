import React from 'react'
import { useTranslate } from '@languages'
import { CircularProgress, Stack, Typography } from '@mui/material'

export const SceneLoading = () => {
  const translate = useTranslate('SceneLoading')

  return (
    <Stack spacing={2} justifyContent='center' alignItems='center'>
      <CircularProgress />

      <Typography>{translate('modelsLoading')}</Typography>
    </Stack>
  )
}
