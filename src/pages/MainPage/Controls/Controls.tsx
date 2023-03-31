import React from 'react'
import { Container, Stack } from '@mui/material'
import { SchemeControls } from './SchemeControls'
import { ChangeSidebarVisibilityButton } from './ChangeSidebarVisibilityButton'

export const Controls = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Container sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <SchemeControls />

          <ChangeSidebarVisibilityButton />
        </Stack>
      </Container>
    </div>
  )
}
