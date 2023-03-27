import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setMotorRotationFrequency } from '@slices'
import { selectMotorRotationFrequency } from '@selectors'
import {
  MOTOR_ROTATION_FREQUENCY_MAX,
  MOTOR_ROTATION_FREQUENCY_MIN,
  MOTOR_ROTATION_FREQUENCY_STEP,
} from '@constants'

export const MotorRotationFrequencyField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('MotorRotationFrequencyField')

  const rotationFrequency = useSelector(selectMotorRotationFrequency)

  const handleChange = (newRotationFrequency: number) => {
    dispatch(setMotorRotationFrequency(newRotationFrequency))
  }

  return (
    <SliderTextField
      name='motor_rotation_frequency'
      label={translate('label')}
      value={rotationFrequency}
      onChange={handleChange}
      min={MOTOR_ROTATION_FREQUENCY_MIN}
      max={MOTOR_ROTATION_FREQUENCY_MAX}
      step={MOTOR_ROTATION_FREQUENCY_STEP}
      adornment='𝒱'
    />
  )
}
