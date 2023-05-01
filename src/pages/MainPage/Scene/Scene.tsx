import { Room } from './Room'
import { Light } from './Light'
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

        <Room />

        <Light />

        <DeviceTable />
      </Canvas>
    </Suspense>
  )
}
