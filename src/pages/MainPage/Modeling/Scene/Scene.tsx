import { Camera } from './Camera'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { DeviceTable } from './DeviceTable'
import { SceneLoading } from './SceneLoading'

export const Scene = () => {
  return (
    <Suspense fallback={<SceneLoading />}>
      <Canvas>
        <Camera />

        <ambientLight />

        <pointLight position={[0, 100, 800]} />

        <DeviceTable />
      </Canvas>
    </Suspense>
  )
}
