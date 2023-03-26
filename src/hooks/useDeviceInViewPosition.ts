import { useSelector } from 'react-redux'
import { selectSceneDeviceInView } from '@selectors'
import {
  COIL_SCENE_POSITION,
  CAMERA_DEFAULT_POSITION,
  VOLTMETER_SCENE_POSITION,
} from '@constants'

export const useDeviceInViewPosition = () => {
  const deviceInView = useSelector(selectSceneDeviceInView)

  return deviceInView
    ? getDevicePosition(deviceInView)
    : CAMERA_DEFAULT_POSITION
}

const getDevicePosition = (device: Device) => {
  switch (device) {
    case '@Voltmeter':
      return VOLTMETER_SCENE_POSITION
    default:
      return COIL_SCENE_POSITION
  }
}
