import { Camera } from './Camera'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { DeviceTable } from './DeviceTable'
import { ModelingSceneFallback } from './ModelingSceneFallback'

export const ModelingScene = () => {
  return (
    <Suspense fallback={<ModelingSceneFallback />}>
      <Canvas resize={{ debounce: 0 }}>
        <Camera />

        <ambientLight />

        <pointLight position={[0, 100, 800]} />

        <DeviceTable />
      </Canvas>
    </Suspense>
  )
}
