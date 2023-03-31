import { extraRU } from './extra.dict'
import { controlsRU } from './controls.dict'
import { modelingInfoRU } from './modelingInfo.dict'
import { configurationRU } from './configuration.dict'
import { errorBoundaryRU } from './errorBoundary.dict'
import { modelingSceneRU } from './modelingScene.dict'

const ru = {
  ...extraRU,
  ...modelingInfoRU,
  ...errorBoundaryRU,
  ...configurationRU,
  ...modelingSceneRU,
  ...controlsRU,
}

export default ru
