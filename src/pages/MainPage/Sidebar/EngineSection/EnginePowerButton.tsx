import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { DevicePowerButton } from '@components'
import { setEngineIsPowerSupplied } from '@slices'
import { selectEngineIsPowerSupplied } from '@selectors'

export const EnginePowerButton = () => {
  const dispatch = useDispatch()

  const isPowered = useSelector(selectEngineIsPowerSupplied)

  const handleClick = (value: boolean) => {
    dispatch(setEngineIsPowerSupplied(value))
  }

  return <DevicePowerButton isPowered={isPowered} onClick={handleClick} />
}
