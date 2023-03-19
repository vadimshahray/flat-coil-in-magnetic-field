import React from 'react'
import { useDispatch } from '@hooks'
import { useTranslate } from '@languages'
import { setModelingStatus } from '@slices'
import { PlayArrow } from '@mui/icons-material'
import { Button, Container, Tooltip } from '@mui/material'

export const StartModelingButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('StartModelingButton')

  const handleClick = () => {
    dispatch(setModelingStatus('started'))
  }

  return (
    <Container>
      <Tooltip title={translate('startModeling')}>
        <Button
          variant='contained'
          onClick={handleClick}
          startIcon={<PlayArrow />}
          fullWidth
        >
          {translate('start')}
        </Button>
      </Tooltip>
    </Container>
  )
}
