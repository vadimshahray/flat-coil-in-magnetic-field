import { Box } from '@mui/material'
import React from 'react'
import { Configuration } from './Configuration'

export const InfoSidebar = () => {
  return (
    <Box sx={{ overflowY: 'auto' }}>
      <Configuration />
    </Box>
  )
}
