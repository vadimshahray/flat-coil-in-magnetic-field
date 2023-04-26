import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { DevicePowerButton } from '@components'
import { setCurrentSourceIsPowerSupplied } from '@slices'
import { selectCurrentSourceIsPowerSupplied } from '@selectors'

export const CurrentSourcePowerButton = () => {
  const dispatch = useDispatch()

  const isPowered = useSelector(selectCurrentSourceIsPowerSupplied)

  const handleClick = (value: boolean) => {
    dispatch(setCurrentSourceIsPowerSupplied(value))
  }

  return <DevicePowerButton isPowered={isPowered} onClick={handleClick} />
}
