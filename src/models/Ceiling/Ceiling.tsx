import React from 'react'
import { useTexture } from '@react-three/drei'
import { CEILING_W, CEILING_D } from '@constants'
import ConcreteAOPath from './textures/concrete_ao.jpg'
import ConcreteHeightPath from './textures/concrete_height.jpg'
import ConcreteNormalPath from './textures/concrete_normal.jpg'
import ConcreteDiffusePath from './textures/concrete_diffuse.jpg'
import ConcreteMetallicPath from './textures/concrete_metallic.jpg'
import ConcreteRoughnessPath from './textures/concrete_roughness.jpg'

const Ceiling = (props: JSX.IntrinsicElements['group']) => {
  const textureMaps = useTexture({
    aoMap: ConcreteAOPath,
    map: ConcreteDiffusePath,
    normalMap: ConcreteNormalPath,
    metalnessMap: ConcreteMetallicPath,
    roughnessMap: ConcreteRoughnessPath,
    displacementMap: ConcreteHeightPath,
  })

  return (
    <group {...props} dispose={null}>
      <mesh>
        <boxGeometry args={[CEILING_W, 1, CEILING_D]} />

        <meshStandardMaterial {...textureMaps} />
      </mesh>
    </group>
  )
}

export default Ceiling
