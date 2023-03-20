import { Camera } from './Camera'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ModelingSceneLoading } from './ModelingSceneLoading'
import { COIL_SCENE_POSITION, VOLTMETER_SCENE_POSITION } from '@constants'

const Coil = React.lazy(() => import('src/models/Coil'))
const Voltmeter = React.lazy(() => import('src/models/Voltmeter'))

export const ModelingScene = () => {
  return (
    <Suspense fallback={<ModelingSceneLoading />}>
      <Canvas>
        <Camera />

        <ambientLight />

        <pointLight position={[0, 100, 800]} />

        <Coil position={COIL_SCENE_POSITION} />

        <Voltmeter position={VOLTMETER_SCENE_POSITION} />
      </Canvas>
    </Suspense>
  )
}
