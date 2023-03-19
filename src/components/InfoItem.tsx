import React, { PropsWithChildren } from 'react'
import { Stack, Typography } from '@mui/material'

type Props = {
  label: string
} & PropsWithChildren

export const InfoItem = ({ label, children }: Props) => {
  return (
    <Stack
      direction='row'
      spacing={2}
      justifyContent='space-between'
      alignItems='center'
    >
      <Typography variant='subtitle2'>{label}</Typography>

      {children}
    </Stack>
  )
}
