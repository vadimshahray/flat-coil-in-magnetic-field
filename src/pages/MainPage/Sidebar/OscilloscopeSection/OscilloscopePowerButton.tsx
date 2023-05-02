import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { DevicePowerButton } from '@components'
import { setOscilloscopeIsPowerSupplied } from '@slices'
import { selectOscilloscopeIsPowerSupplied } from '@selectors'

export const OscilloscopePowerButton = () => {
  const dispatch = useDispatch()

  const isPowered = useSelector(selectOscilloscopeIsPowerSupplied)

  const handleClick = (value: boolean) => {
    dispatch(setOscilloscopeIsPowerSupplied(value))
  }

  return <DevicePowerButton isPowered={isPowered} onClick={handleClick} />
}
