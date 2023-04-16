import React from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import WallWhiteTexturePath from 'src/assets/wall_white.jpg'

const size = 1024

export const Wall = (props: JSX.IntrinsicElements['group']) => {
  const { map: whiteWall } = useTexture({ map: WallWhiteTexturePath })

  whiteWall.repeat.set(4, 4)
  whiteWall.wrapS = whiteWall.wrapT = THREE.RepeatWrapping

  return (
    <group {...props} dispose={null}>
      <mesh position={[0, size / 2, 0]}>
        <boxGeometry args={[1, size, size]} />

        <meshStandardMaterial map={whiteWall} />
      </mesh>
    </group>
  )
}
