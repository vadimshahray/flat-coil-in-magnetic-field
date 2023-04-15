import { Camera } from './Camera'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { DeviceTable } from './DeviceTable'
import { SceneFallback } from './SceneFallback'
import { Stats } from '@react-three/drei'
import { Floor } from './Floor'

export const Scene = () => {
  return (
    <Suspense fallback={<SceneFallback />}>
      <Canvas resize={{ debounce: 0 }}>
        <Stats />

        <Camera />

        <ambientLight intensity={0.6} />

        <directionalLight intensity={0.3} position={[300, 600, 200]} />
        <directionalLight intensity={0.3} position={[300, 600, -200]} />

        <directionalLight intensity={0.3} position={[-300, 600, 200]} />
        <directionalLight intensity={0.3} position={[-300, 600, -200]} />

        <DeviceTable />

        <Floor />
      </Canvas>
    </Suspense>
  )
}
