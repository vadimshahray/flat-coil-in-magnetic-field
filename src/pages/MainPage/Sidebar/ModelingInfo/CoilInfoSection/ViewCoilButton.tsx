import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { ViewDeviceButton } from '@components'
import { setSceneCameraViewPoint } from '@slices'
import { selectSceneCameraViewPoint } from '@selectors'

export const ViewCoilButton = () => {
  const dispatch = useDispatch()

  const inView = useSelector(selectSceneCameraViewPoint) === '@Coil'

  const handleClick = () => {
    dispatch(setSceneCameraViewPoint(inView ? undefined : '@Coil'))
  }

  return <ViewDeviceButton inView={inView} onClick={handleClick} />
}