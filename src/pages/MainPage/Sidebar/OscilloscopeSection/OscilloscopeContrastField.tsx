import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setOscilloscopeContrast } from '@slices'
import { selectOscilloscopeContrast } from '@selectors'
import {
  OSCILLOSCOPE_CONTRAST_MAX,
  OSCILLOSCOPE_CONTRAST_MIN,
  OSCILLOSCOPE_CONTRAST_STEP,
} from '@constants'

export const OscilloscopeContrastField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('OscilloscopeContrastField')

  const contrast = useSelector(selectOscilloscopeContrast)

  const handleChange = (value: number) => {
    dispatch(setOscilloscopeContrast(value))
  }

  return (
    <SliderTextField
      label={translate('label')}
      value={contrast}
      onChange={handleChange}
      min={OSCILLOSCOPE_CONTRAST_MIN}
      max={OSCILLOSCOPE_CONTRAST_MAX}
      step={OSCILLOSCOPE_CONTRAST_STEP}
    />
  )
}
