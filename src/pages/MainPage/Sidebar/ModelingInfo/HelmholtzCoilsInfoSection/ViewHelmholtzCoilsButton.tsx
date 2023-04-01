import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { ViewDeviceButton } from '@components'
import { setSceneCameraViewPoint } from '@slices'
import { selectSceneCameraViewPoint } from '@selectors'

export const ViewHelmholtzCoilsButton = () => {
  const dispatch = useDispatch()

  const inView = useSelector(selectSceneCameraViewPoint) === '@HelmholtzCoils'

  const handleClick = () => {
    dispatch(setSceneCameraViewPoint(inView ? undefined : '@HelmholtzCoils'))
  }

  return <ViewDeviceButton inView={inView} onClick={handleClick} />
}
