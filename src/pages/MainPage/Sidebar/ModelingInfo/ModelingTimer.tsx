import React from 'react'
import { timeToString } from '@utils'
import { useSelector } from 'react-redux'
import { selectModelingTime } from '@selectors'
import { Stack, Typography } from '@mui/material'
import { TimerOutlined } from '@mui/icons-material'

export const ModelingTimer = () => {
  const modelingTime = useSelector(selectModelingTime)

  return (
    <Stack direction='row' spacing={0.25} alignItems='center'>
      <TimerOutlined fontSize='small' />

      <Typography fontFamily='Fira Code, monospace'>
        {timeToString(modelingTime)}
      </Typography>
    </Stack>
  )
}
