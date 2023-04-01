import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { ViewDeviceButton } from '@components'
import { setSceneCameraViewPoint } from '@slices'
import { selectSceneCameraViewPoint } from '@selectors'

export const ViewMotorButton = () => {
  const dispatch = useDispatch()

  const inView = useSelector(selectSceneCameraViewPoint) === '@Motor'

  const handleClick = () => {
    dispatch(setSceneCameraViewPoint(inView ? undefined : '@Motor'))
  }

  return <ViewDeviceButton inView={inView} onClick={handleClick} />
}
