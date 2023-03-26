import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { ViewDeviceButton } from '@components'
import { setSceneDeviceInView } from '@slices'
import { selectSceneDeviceInView } from '@selectors'

export const ViewCoilButton = () => {
  const dispatch = useDispatch()

  const inView = useSelector(selectSceneDeviceInView) === '@Coil'

  const handleClick = () => {
    dispatch(setSceneDeviceInView(inView ? undefined : '@Coil'))
  }

  return <ViewDeviceButton inView={inView} onClick={handleClick} />
}
