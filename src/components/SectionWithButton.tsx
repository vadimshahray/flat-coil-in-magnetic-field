import React from 'react'
import { PropsWithChildren } from 'react'
import { Stack, Container, Typography } from '@mui/material'

type Props = {
  title: string
  Icon?: Icon
  Button: React.ReactNode
} & PropsWithChildren

export const SectionWithButton = ({ title, Icon, Button, children }: Props) => {
  return (
    <Container>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography variant='subtitle1' display='flex' alignItems='center'>
          {Icon && <Icon sx={{ marginRight: 1 }} />}

          {title}
        </Typography>

        {Button}
      </Stack>

      {children}
    </Container>
  )
}
