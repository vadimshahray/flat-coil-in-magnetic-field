import React from 'react'
import { Container } from '@mui/material'
import { ModelingScene } from './ModelingScene'
import { InfoSidebar } from './InfoSidebar/InfoSidebar'

export const MainPage = () => {
  return (
    <Container sx={{ display: 'grid', gridTemplateColumns: '1fr 400px' }}>
      <ModelingScene />

      <InfoSidebar />
    </Container>
  )
}
