import { extraRU } from './extra.dict'
import { devicesRU } from './devices.dict'
import { controlsRU } from './controls.dict'
import { modelingInfoRU } from './modelingInfo.dict'
import { configurationRU } from './configuration.dict'
import { errorBoundaryRU } from './errorBoundary.dict'
import { modelingSceneRU } from './modelingScene.dict'

const ru = {
  ...extraRU,
  ...devicesRU,
  ...controlsRU,
  ...modelingInfoRU,
  ...errorBoundaryRU,
  ...configurationRU,
  ...modelingSceneRU,
}

export default ru
