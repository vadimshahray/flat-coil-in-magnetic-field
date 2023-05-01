import React from 'react'
import { CEILING_W, WALL_H } from '@constants'

export const Light = () => {
  return (
    <>
      <ambientLight intensity={0.6} />

      <group position={[0, 2 * WALL_H - 57, 0]}>
        <directionalLight intensity={0.45} position={[-CEILING_W, 0, 0]} />

        <directionalLight intensity={0.45} position={[CEILING_W, 0, 0]} />
      </group>
    </>
  )
}
