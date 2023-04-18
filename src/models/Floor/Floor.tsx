import React from 'react'
import { FLOOR_D, FLOOR_W } from '@constants'
import { useTexture } from '@react-three/drei'
import FloorAOPath from './textures/floor_ao.png'
import FloorColorPath from './textures/floor_color.png'
import FloorHeightPath from './textures/floor_height.png'
import FloorNormalPath from './textures/floor_normal.png'
import FloorMetallicPath from './textures/floor_metallic.png'
import FloorRoughnessPath from './textures/floor_roughness.png'

const Floor = (props: JSX.IntrinsicElements['group']) => {
  const textureMaps = useTexture({
    aoMap: FloorAOPath,
    map: FloorColorPath,
    normalMap: FloorNormalPath,
    metalnessMap: FloorMetallicPath,
    roughnessMap: FloorRoughnessPath,
    displacementMap: FloorHeightPath,
  })

  return (
    <group {...props} dispose={null}>
      <mesh rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[FLOOR_W, 1, FLOOR_D]} />

        <meshStandardMaterial {...textureMaps} />
      </mesh>
    </group>
  )
}

export default Floor
