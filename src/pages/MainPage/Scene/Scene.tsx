import { Camera } from './Camera'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { DeviceTable } from './DeviceTable'
import { SceneFallback } from './SceneFallback'

export const Scene = () => {
  return (
    <Suspense fallback={<SceneFallback />}>
      <Canvas resize={{ debounce: 0 }}>
        <Camera />

        <ambientLight />

        <pointLight position={[0, 100, 800]} />

        <DeviceTable />
      </Canvas>
    </Suspense>
  )
}
