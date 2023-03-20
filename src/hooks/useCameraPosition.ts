import { useSelector } from 'react-redux'
import { selectSceneDeviceInView } from '@selectors'
import {
  CAMERA_COIL_POSITION,
  CAMERA_VOLTMETER_POSITION,
  CAMERA_ALL_DEVICES_POSITION,
} from '@constants'

export const useCameraPosition = () => {
  const deviceInView = useSelector(selectSceneDeviceInView)

  return deviceInView
    ? getDeviceCameraPosition(deviceInView)
    : CAMERA_ALL_DEVICES_POSITION
}

const getDeviceCameraPosition = (device: Device) => {
  switch (device) {
    case '@Voltmeter':
      return CAMERA_VOLTMETER_POSITION

    default:
      return CAMERA_COIL_POSITION
  }
}
