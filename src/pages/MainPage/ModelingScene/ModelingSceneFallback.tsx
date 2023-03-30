import React from 'react'
import { useTranslate } from '@languages'
import { CircularProgress, Stack, Typography } from '@mui/material'

export const ModelingSceneFallback = () => {
  const translate = useTranslate('ModelingSceneFallback')

  return (
    <Stack
      spacing={2}
      justifyContent='center'
      alignItems='center'
      sx={{ height: '100%' }}
    >
      <CircularProgress />

      <Typography>{translate('modelsLoading')}</Typography>
    </Stack>
  )
}
