import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { Tooltip, Button } from '@mui/material'
import { selectModelingStatus } from '@selectors'
import { restartModeling, stopModeling } from '@slices'
import { RestartAltOutlined, StopOutlined } from '@mui/icons-material'

export const StopStartModelingButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('StopStartModelingButton')

  const modelingStatus = useSelector(selectModelingStatus)

  const isModelingStarted = modelingStatus === 'started'

  const handleClick = () => {
    dispatch(isModelingStarted ? stopModeling() : restartModeling())
  }

  return (
    <Tooltip
      title={translate(isModelingStarted ? 'stopModeling' : 'startModeling')}
    >
      <Button
        variant='contained'
        onClick={handleClick}
        startIcon={
          isModelingStarted ? <StopOutlined /> : <RestartAltOutlined />
        }
      >
        {translate(isModelingStarted ? 'stop' : 'start')}
      </Button>
    </Tooltip>
  )
}
