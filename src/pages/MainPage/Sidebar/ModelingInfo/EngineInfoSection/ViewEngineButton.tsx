import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { ViewDeviceButton } from '@components'
import { setSceneCameraViewPoint } from '@slices'
import { selectSceneCameraViewPoint } from '@selectors'

export const ViewEngineButton = () => {
  const dispatch = useDispatch()

  const inView = useSelector(selectSceneCameraViewPoint) === '@Engine'

  const handleClick = () => {
    dispatch(setSceneCameraViewPoint(inView ? undefined : '@Engine'))
  }

  return <ViewDeviceButton inView={inView} onClick={handleClick} />
}
