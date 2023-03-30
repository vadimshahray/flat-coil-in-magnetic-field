import React from 'react'
import { Sidebar } from './Sidebar'
import { Controls } from './Controls'
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
        gridTemplateRows: '1fr auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ModelingScene />

      <Sidebar />

      <Controls />
    </Container>
  )
}
