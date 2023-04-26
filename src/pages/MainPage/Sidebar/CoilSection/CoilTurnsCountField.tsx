import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { setCoilTurnsCount } from '@slices'
import { SliderTextField } from '@components'
import { selectCoilTurnsCount } from 'src/selectors/coil.selectors'
import {
  COIL_TURNS_COUNT_MIN,
  COIL_TURNS_COUNT_MAX,
  COIL_TURNS_COUNT_STEP,
} from '@constants'

export const CoilTurnsCountField = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('CoilTurnCountField')

  const turnsCount = useSelector(selectCoilTurnsCount)

  const handleChange = (newCount: number) => {
    dispatch(setCoilTurnsCount(newCount))
  }

  return (
    <SliderTextField
      label={translate('label')}
      value={turnsCount}
      onChange={handleChange}
      min={COIL_TURNS_COUNT_MIN}
      max={COIL_TURNS_COUNT_MAX}
      step={COIL_TURNS_COUNT_STEP}
      adornment='n'
    />
  )
}
