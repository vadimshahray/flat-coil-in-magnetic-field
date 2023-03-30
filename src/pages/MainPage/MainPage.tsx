import React from 'react'
import { Sidebar } from './Sidebar'
import { Container } from '@mui/material'
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

      <Sidebar />
    </Container>
  )
}
