import React from 'react'
import { Scene } from './Scene'
import { Container, Stack } from '@mui/material'

export const Modeling = () => {
  return (
    <Container disableGutters sx={{ position: 'relative' }}>
      <Scene />

      <Container sx={{ position: 'absolute', bottom: 0, left: 0 }}>
        <Stack direction='row' alignItems='center'></Stack>
      </Container>
    </Container>
  )
}
