import React from 'react'
import { useDispatch } from '@hooks'
import { startModeling } from '@slices'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { PlayArrow } from '@mui/icons-material'
import { selectInvalidFieldsLength } from '@selectors'
import { Button, Container, Tooltip } from '@mui/material'

export const StartModelingButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('StartModelingButton')

  const invalidFields = useSelector(selectInvalidFieldsLength)

  const handleClick = () => {
    if (invalidFields) return

    dispatch(startModeling())
  }

  return (
    <Container>
      <Tooltip title={translate('startModeling')}>
        <Button
          variant='contained'
          onClick={handleClick}
          startIcon={<PlayArrow />}
          color={invalidFields ? 'error' : 'primary'}
          fullWidth
        >
          {translate('start')}
        </Button>
      </Tooltip>
    </Container>
  )
}
