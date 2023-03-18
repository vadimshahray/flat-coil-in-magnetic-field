import React from 'react'
import { Container } from '@mui/material'
import { InfoSidebar } from './InfoSidebar'
import { ModelingScene } from './ModelingScene'

export const MainPage = () => {
  return (
    <Container
      disableGutters
      sx={{
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        overflow: 'hidden',
      }}
    >
      <ModelingScene />

      <InfoSidebar />
    </Container>
  )
}
