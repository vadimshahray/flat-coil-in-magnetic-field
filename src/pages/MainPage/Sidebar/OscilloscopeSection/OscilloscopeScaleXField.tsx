import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setOscilloscopeScaleX } from '@slices'
import { selectOscilloscopeScaleX } from '@selectors'
import {
  OSCILLOSCOPE_SCALE_X_MAX,
  OSCILLOSCOPE_SCALE_X_MIN,
  OSCILLOSCOPE_SCALE_X_STEP,
} from '@constants'

export const OscilloscopeScaleXField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('OscilloscopeScaleXField')

  const scaleX = useSelector(selectOscilloscopeScaleX)

  const handleChange = (value: number) => {
    dispatch(setOscilloscopeScaleX(value))
  }

  return (
    <SliderTextField
      label={translate('label')}
      value={scaleX}
      onChange={handleChange}
      min={OSCILLOSCOPE_SCALE_X_MIN}
      max={OSCILLOSCOPE_SCALE_X_MAX}
      step={OSCILLOSCOPE_SCALE_X_STEP}
    />
  )
}
