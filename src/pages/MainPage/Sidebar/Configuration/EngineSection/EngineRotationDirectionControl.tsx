import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { setEngineRotationDirection } from '@slices'
import { Button, Stack, Typography } from '@mui/material'
import { selectEngineRotationDirection } from '@selectors'
import { ChangeCircleOutlined } from '@mui/icons-material'

export const EngineRotationDirectionControl = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('EngineRotationDirectionControl')

  const rotationDirection = useSelector(selectEngineRotationDirection)

  const handleClick = () => {
    dispatch(
      setEngineRotationDirection(
        rotationDirection === 'left' ? 'right' : 'left',
      ),
    )
  }

  return (
    <Stack
      direction='row'
      spacing={1}
      alignItems='center'
      justifyContent='space-between'
    >
      <Typography variant='body2'>
        {translate('rotationDirection', {
          direction: translate(rotationDirection),
        })}
      </Typography>

      <Button startIcon={<ChangeCircleOutlined />} onClick={handleClick}>
        {translate('changeDirectionButton')}
      </Button>
    </Stack>
  )
}
