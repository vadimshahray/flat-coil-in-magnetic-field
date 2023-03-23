import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { setMotorRotationDirection } from '@slices'
import { Button, Stack, Typography } from '@mui/material'
import { selectMotorRotationDirection } from '@selectors'
import { ChangeCircleOutlined } from '@mui/icons-material'

export const MotorRotationDirectionControl = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('MotorRotationDirectionControl')

  const rotationDirection = useSelector(selectMotorRotationDirection)

  const handleClick = () => {
    dispatch(
      setMotorRotationDirection(
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
