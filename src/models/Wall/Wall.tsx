import React from 'react'
import { WALL_H, WALL_D } from '@constants'
import { useTexture } from '@react-three/drei'
import WallColorPath from './textures/map.jpg'

const Wall = (props: JSX.IntrinsicElements['group']) => {
  const textureMaps = useTexture({
    map: WallColorPath,
  })

  return (
    <group {...props} dispose={null}>
      <mesh position={[0, WALL_H / 2, 0]}>
        <boxGeometry args={[1, WALL_H, WALL_D]} />

        <meshStandardMaterial {...textureMaps} />
      </mesh>
    </group>
  )
}

export default Wall
