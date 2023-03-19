import React from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { ModelingInfo } from './ModelingInfo'
import { Configuration } from './Configuration'
import { selectModelingStatus } from '@selectors'

export const Sidebar = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return (
    <Box sx={{ overflowY: 'auto' }}>
      {modelingStatus === 'idle' ? <Configuration /> : <ModelingInfo />}
    </Box>
  )
}
