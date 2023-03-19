import { Camera } from './Camera'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ModelingSceneLoading } from './ModelingSceneLoading'

const Voltmeter = React.lazy(() => import('src/models/Voltmeter'))

export const ModelingScene = () => {
  return (
    <Suspense fallback={<ModelingSceneLoading />}>
      <Canvas>
        <Camera />

        <ambientLight />

        <pointLight position={[100, 10, 0]} />

        <Voltmeter />
      </Canvas>
    </Suspense>
  )
}
