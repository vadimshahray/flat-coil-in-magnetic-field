import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { ViewDeviceButton } from '@components'
import { setSceneDeviceInView } from '@slices'
import { selectSceneDeviceInView } from '@selectors'

export const ViewMotorButton = () => {
  const dispatch = useDispatch()

  const inView = useSelector(selectSceneDeviceInView) === '@Motor'

  const handleClick = () => {
    dispatch(setSceneDeviceInView(inView ? undefined : '@Motor'))
  }

  return <ViewDeviceButton inView={inView} onClick={handleClick} />
}
