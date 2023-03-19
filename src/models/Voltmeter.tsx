import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'

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

export const Voltmeter = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + '/models/voltmeter-transformed.glb',
  ) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group scale={[20, 25, 45]}>
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

useGLTF.preload('/voltmeter-transformed.glb')
