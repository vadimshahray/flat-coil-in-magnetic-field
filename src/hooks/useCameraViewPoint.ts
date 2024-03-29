import { useSelector } from 'react-redux'
import { selectSceneCameraViewPoint } from '@selectors'
import {
  COIL_SCENE_POSITION,
  CAMERA_COIL_POSITION,
  ENGINE_SCENE_POSITION,
  CAMERA_ENGINE_POSITION,
  CAMERA_DEFAULT_POSITION,
  CAMERA_ALL_DEVICES_POSITION,
  OSCILLOSCOPE_SCENE_POSITION,
  CAMERA_OSCILLOSCOPE_POSITION,
  CURRENT_SOURCE_SCENE_POSITION,
  CAMERA_CURRENT_SOURCE_POSITION,
  HELMHOLTZ_COILS_SCENE_POSITION,
  CAMERA_HELMHOLTZ_COILS_POSITION,
} from '@constants'

export const useCameraViewPoint = () => {
  const viewPoint = useSelector(selectSceneCameraViewPoint)

  switch (viewPoint) {
    case '@Engine':
      return [ENGINE_SCENE_POSITION, CAMERA_ENGINE_POSITION]
    case '@Coil':
      return [COIL_SCENE_POSITION, CAMERA_COIL_POSITION]
    case '@HelmholtzCoils':
      return [HELMHOLTZ_COILS_SCENE_POSITION, CAMERA_HELMHOLTZ_COILS_POSITION]
    case '@CurrentSource':
      return [CURRENT_SOURCE_SCENE_POSITION, CAMERA_CURRENT_SOURCE_POSITION]
    case '@Oscilloscope':
      return [OSCILLOSCOPE_SCENE_POSITION, CAMERA_OSCILLOSCOPE_POSITION]
    default:
      return [CAMERA_DEFAULT_POSITION, CAMERA_ALL_DEVICES_POSITION]
  }
}
