import { Camera } from './Camera'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { DeviceTable } from './DeviceTable'
import { ModelingSceneLoading } from './ModelingSceneLoading'

export const ModelingScene = () => {
  return (
    <Suspense fallback={<ModelingSceneLoading />}>
      <Canvas>
        <Camera />

        <ambientLight />

        <pointLight position={[0, 100, 800]} />

        <DeviceTable />
      </Canvas>
    </Suspense>
  )
}
