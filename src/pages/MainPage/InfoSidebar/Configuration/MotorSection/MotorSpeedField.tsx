import React from 'react'
import { useDispatch } from '@hooks'
import { setMotorSpeed } from '@slices'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { selectMotorSpeed } from '@selectors'
import { MOTOR_SPEED_MAX, MOTOR_SPEED_MIN, MOTOR_SPEED_STEP } from '@constants'

export const MotorSpeedField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('MotorSpeedField')

  const speed = useSelector(selectMotorSpeed)

  const handleChange = (newSpeed: number) => {
    dispatch(setMotorSpeed(newSpeed))
  }

  return (
    <SliderTextField
      label={translate('label')}
      value={speed}
      onChange={handleChange}
      min={MOTOR_SPEED_MIN}
      max={MOTOR_SPEED_MAX}
      step={MOTOR_SPEED_STEP}
    />
  )
}
