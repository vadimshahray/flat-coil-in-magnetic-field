import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setHelmholtzCoilsRadius } from '@slices'
import { selectHelmholtzCoilsRadius } from '@selectors'
import {
  HELMHOLTZ_COILS_RADIUS_MIN,
  HELMHOLTZ_COILS_RADIUS_MAX,
  HELMHOLTZ_COILS_RADIUS_STEP,
} from '@constants'

export const HelmholtzCoilsRadiusField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('HelmholtzCoilsRadiusField')

  const radius = useSelector(selectHelmholtzCoilsRadius)

  const handleChange = (newRadius: number) => {
    dispatch(setHelmholtzCoilsRadius(newRadius))
  }

  return (
    <SliderTextField
      name='Helmholtz_coils_radius'
      label={translate('label')}
      value={radius}
      onChange={handleChange}
      min={HELMHOLTZ_COILS_RADIUS_MIN}
      max={HELMHOLTZ_COILS_RADIUS_MAX}
      step={HELMHOLTZ_COILS_RADIUS_STEP}
      adornment='R'
    />
  )
}
