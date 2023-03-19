import React from 'react'
import { Box } from '@mui/material'
import { Configuration } from './Configuration'

export const Sidebar = () => {
  return (
    <Box sx={{ overflowY: 'auto' }}>
      <Configuration />
    </Box>
  )
}
