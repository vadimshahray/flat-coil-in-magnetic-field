import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { ViewDeviceButton } from '@components'
import { setSceneDeviceInView } from '@slices'
import { selectSceneDeviceInView } from '@selectors'

export const ViewVoltmeterButton = () => {
  const dispatch = useDispatch()

  const inView = useSelector(selectSceneDeviceInView) === '@Voltmeter'

  const handleClick = () => {
    dispatch(setSceneDeviceInView(inView ? undefined : '@Voltmeter'))
  }

  return <ViewDeviceButton inView={inView} onClick={handleClick} />
}
