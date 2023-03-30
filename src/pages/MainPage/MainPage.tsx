import React from 'react'
import { Sidebar } from './Sidebar'
import { Controls } from './Controls'
import { Container } from '@mui/material'
import { Scene } from './Scene'

export const MainPage = () => {
  return (
    <Container
      disableGutters
      sx={{
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gridTemplateRows: '1fr 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Scene />

      <Sidebar />

      <Controls />
    </Container>
  )
}
