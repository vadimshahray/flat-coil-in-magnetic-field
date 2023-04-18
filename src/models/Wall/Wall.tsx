import React from 'react'
import { WALL_H, WALL_D } from '@constants'
import { useTexture } from '@react-three/drei'
import WallAOPath from './textures/wall_ao.jpg'
import WallColorPath from './textures/wall_color.jpg'
import WallHeightPath from './textures/wall_height.jpg'
import WallNormalPath from './textures/wall_normal.jpg'
import WallRoughnessPath from './textures/wall_roughness.jpg'

const Wall = (props: JSX.IntrinsicElements['group']) => {
  const textureMaps = useTexture({
    aoMap: WallAOPath,
    map: WallColorPath,
    normalMap: WallNormalPath,
    roughnessMap: WallRoughnessPath,
    displacementMap: WallHeightPath,
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
