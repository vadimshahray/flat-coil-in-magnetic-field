import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setHelmholtzCoilsAmperage } from '@slices'
import { selectHelmholtzCoilsAmperage } from '@selectors'
import {
  HELMHOLTZ_COILS_AMPERAGE_MIN,
  HELMHOLTZ_COILS_AMPERAGE_MAX,
  HELMHOLTZ_COILS_AMPERAGE_STEP,
} from '@constants'

export const HelmholtzCoilsAmperageField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('HelmholtzCoilsAmperageField')

  const amperage = useSelector(selectHelmholtzCoilsAmperage)

  const handleChange = (newAmperage: number) => {
    dispatch(setHelmholtzCoilsAmperage(newAmperage))
  }

  return (
    <SliderTextField
      name='Helmholtz_coils_amperage'
      label={translate('label')}
      value={amperage}
      onChange={handleChange}
      min={HELMHOLTZ_COILS_AMPERAGE_MIN}
      max={HELMHOLTZ_COILS_AMPERAGE_MAX}
      step={HELMHOLTZ_COILS_AMPERAGE_STEP}
    />
  )
}
