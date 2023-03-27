import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setHelmholtzCoilsTurnsCount } from '@slices'
import { selectHelmholtzCoilsTurnsCount } from '@selectors'
import {
  HELMHOLTZ_COILS_TURNS_COUNT_MIN,
  HELMHOLTZ_COILS_TURNS_COUNT_MAX,
  HELMHOLTZ_COILS_TURNS_COUNT_STEP,
} from '@constants'

export const HelmholtzCoilsTurnsCountField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('HelmholtzCoilsTurnsCountField')

  const turnsCount = useSelector(selectHelmholtzCoilsTurnsCount)

  const handleChange = (newTurnsCount: number) => {
    dispatch(setHelmholtzCoilsTurnsCount(newTurnsCount))
  }

  return (
    <SliderTextField
      name='Helmholtz_coils_turns_count'
      label={translate('label')}
      value={turnsCount}
      onChange={handleChange}
      min={HELMHOLTZ_COILS_TURNS_COUNT_MIN}
      max={HELMHOLTZ_COILS_TURNS_COUNT_MAX}
      step={HELMHOLTZ_COILS_TURNS_COUNT_STEP}
      adornment='𝓃'
    />
  )
}
