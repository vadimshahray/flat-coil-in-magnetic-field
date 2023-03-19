import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { Tooltip, Button } from '@mui/material'
import { selectModelingStatus } from '@selectors'
import { RestartAltOutlined, StopOutlined } from '@mui/icons-material'
import { useDispatch } from '@hooks'
import { setModelingStatus } from '@slices'

export const StopStartModelingButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('StopStartModelingButton')

  const modelingStatus = useSelector(selectModelingStatus)

  const isModelingStarted = modelingStatus === 'started'

  const handleClick = () => {
    dispatch(setModelingStatus(isModelingStarted ? 'stopped' : 'started'))
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
