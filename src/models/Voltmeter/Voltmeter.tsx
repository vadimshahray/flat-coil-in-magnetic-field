import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import VoltmeterModelPath from './voltmeter.glb'

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

const Voltmeter = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(VoltmeterModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        scale={[20, 25, 45]}
        rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
      >
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials['Material.001']}
        />

        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials['Material.002']}
        />
      </group>
    </group>
  )
}

export default Voltmeter
