import React from 'react'
import { Sidebar } from './Sidebar'
import { Modeling } from './Modeling'
import { Container } from '@mui/material'

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
      <Modeling />

      <Sidebar />
    </Container>
  )
}
