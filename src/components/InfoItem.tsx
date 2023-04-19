import React, { PropsWithChildren } from 'react'
import { Stack, Typography } from '@mui/material'

type Props = {
  label: string
  value: string
} & PropsWithChildren

export const InfoItem = ({ label, value }: Props) => {
  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'
      justifyContent='space-between'
    >
      <Typography variant='subtitle2'>{label}</Typography>

      <Typography fontFamily='Fira Sans, monospace'>{value}</Typography>
    </Stack>
  )
}
