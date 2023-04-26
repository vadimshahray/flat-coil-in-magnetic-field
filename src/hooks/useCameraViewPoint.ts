import { useSelector } from 'react-redux'
import { selectSceneCameraViewPoint } from '@selectors'
import {
  COIL_SCENE_POSITION,
  CAMERA_COIL_POSITION,
  CAMERA_DEFAULT_POSITION,
  VOLTMETER_SCENE_POSITION,
  CAMERA_VOLTMETER_POSITION,
  CAMERA_ALL_DEVICES_POSITION,
  HELMHOLTZ_COILS_SCENE_POSITION,
  CAMERA_HELMHOLTZ_COILS_POSITION,
} from '@constants'

export const useCameraViewPoint = () => {
  const viewPoint = useSelector(selectSceneCameraViewPoint)

  switch (viewPoint) {
    case '@Voltmeter':
      return [VOLTMETER_SCENE_POSITION, CAMERA_VOLTMETER_POSITION]
    case '@Coil':
      return [COIL_SCENE_POSITION, CAMERA_COIL_POSITION]
    case '@HelmholtzCoils':
      return [HELMHOLTZ_COILS_SCENE_POSITION, CAMERA_HELMHOLTZ_COILS_POSITION]
    default:
      return [CAMERA_DEFAULT_POSITION, CAMERA_ALL_DEVICES_POSITION]
  }
}
