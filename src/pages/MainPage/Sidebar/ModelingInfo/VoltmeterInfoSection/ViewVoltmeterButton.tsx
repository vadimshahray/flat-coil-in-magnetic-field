import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { ViewDeviceButton } from '@components'
import { setSceneCameraViewPoint } from '@slices'
import { selectSceneCameraViewPoint } from '@selectors'

export const ViewVoltmeterButton = () => {
  const dispatch = useDispatch()

  const inView = useSelector(selectSceneCameraViewPoint) === '@Voltmeter'

  const handleClick = () => {
    dispatch(setSceneCameraViewPoint(inView ? undefined : '@Voltmeter'))
  }

  return <ViewDeviceButton inView={inView} onClick={handleClick} />
}
