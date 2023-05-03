import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setOscilloscopeScaleY } from '@slices'
import { selectOscilloscopeScaleY } from '@selectors'
import {
  OSCILLOSCOPE_SCALE_Y_MAX,
  OSCILLOSCOPE_SCALE_Y_MIN,
  OSCILLOSCOPE_SCALE_Y_STEP,
} from '@constants'

export const OscilloscopeScaleYField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('OscilloscopeScaleYField')

  const scaleY = useSelector(selectOscilloscopeScaleY)

  const handleChange = (value: number) => {
    dispatch(setOscilloscopeScaleY(value))
  }

  return (
    <SliderTextField
      label={translate('label')}
      value={scaleY}
      onChange={handleChange}
      min={OSCILLOSCOPE_SCALE_Y_MIN}
      max={OSCILLOSCOPE_SCALE_Y_MAX}
      step={OSCILLOSCOPE_SCALE_Y_STEP}
    />
  )
}
