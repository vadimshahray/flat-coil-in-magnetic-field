import React, { ErrorInfo } from 'react'
import { useTranslate } from '@languages'
import { ErrorOutlineOutlined } from '@mui/icons-material'
import { Container, Stack, Typography } from '@mui/material'

type Props = {
  error?: Error
  errorInfo?: ErrorInfo
}

export const ErrorFallback = ({ error, errorInfo }: Props) => {
  const translate = useTranslate('ErrorFallback')

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Stack spacing={1} sx={{ width: 720 }}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <ErrorOutlineOutlined color='error' fontSize='large' />

          <Typography variant='h4' color='error'>
            {translate('title')}
          </Typography>
        </Stack>

        <Typography variant='h6' color='error'>
          {error?.name}
        </Typography>

        <Typography variant='body1' color='error'>
          {error?.message}
        </Typography>

        <Typography variant='caption' color='error' whiteSpace='pre-line'>
          {errorInfo?.componentStack}
        </Typography>
      </Stack>
    </Container>
  )
}
