import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setEngineRotationFrequency } from '@slices'
import { selectEngineRotationFrequency } from '@selectors'
import {
  ENGINE_ROTATION_FREQUENCY_MAX,
  ENGINE_ROTATION_FREQUENCY_MIN,
  ENGINE_ROTATION_FREQUENCY_STEP,
} from '@constants'

export const EngineRotationFrequencyField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('EngineRotationFrequencyField')

  const rotationFrequency = useSelector(selectEngineRotationFrequency)

  const handleChange = (newRotationFrequency: number) => {
    dispatch(setEngineRotationFrequency(newRotationFrequency))
  }

  return (
    <SliderTextField
      name='engine_rotation_frequency'
      label={translate('label')}
      value={rotationFrequency}
      onChange={handleChange}
      min={ENGINE_ROTATION_FREQUENCY_MIN}
      max={ENGINE_ROTATION_FREQUENCY_MAX}
      step={ENGINE_ROTATION_FREQUENCY_STEP}
      adornment='𝒱'
    />
  )
}
