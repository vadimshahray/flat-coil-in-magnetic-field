import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { ViewDeviceButton } from '@components'
import { setSceneDeviceInView } from '@slices'
import { selectSceneDeviceInView } from '@selectors'

export const ViewHelmholtzCoilsButton = () => {
  const dispatch = useDispatch()

  const inView = useSelector(selectSceneDeviceInView) === '@HelmholtzCoils'

  const handleClick = () => {
    dispatch(setSceneDeviceInView(inView ? undefined : '@HelmholtzCoils'))
  }

  return <ViewDeviceButton inView={inView} onClick={handleClick} />
}
