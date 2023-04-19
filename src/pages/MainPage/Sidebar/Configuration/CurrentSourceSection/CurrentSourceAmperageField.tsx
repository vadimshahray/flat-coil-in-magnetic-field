import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setCurrentSourceAmperage } from '@slices'
import { selectCurrentSourceAmperage } from '@selectors'
import {
  CURRENT_SOURCE_AMPERAGE_MAX,
  CURRENT_SOURCE_AMPERAGE_MIN,
  CURRENT_SOURCE_AMPERAGE_STEP,
} from '@constants'

export const CurrentSourcesAmperageField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('CurrentSourceAmperageField')

  const amperage = useSelector(selectCurrentSourceAmperage)

  const handleChange = (newAmperage: number) => {
    dispatch(setCurrentSourceAmperage(newAmperage))
  }

  return (
    <SliderTextField
      name='current_source_amperage'
      label={translate('label')}
      value={amperage}
      onChange={handleChange}
      min={CURRENT_SOURCE_AMPERAGE_MIN}
      max={CURRENT_SOURCE_AMPERAGE_MAX}
      step={CURRENT_SOURCE_AMPERAGE_STEP}
      adornment='I'
    />
  )
}
