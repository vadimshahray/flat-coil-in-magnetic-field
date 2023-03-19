import React from 'react'
import { Camera } from './Camera'
import { Voltmeter } from '@models'
import { Canvas } from '@react-three/fiber'

export const ModelingScene = () => {
  return (
    <Canvas>
      <Camera />

      <ambientLight />

      <pointLight position={[100, 10, 0]} />

      <Voltmeter />
    </Canvas>
  )
}
