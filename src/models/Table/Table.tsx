import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import TableModelPath from './table.glb'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: {
    Cube025: THREE.Mesh
    Cube025_1: THREE.Mesh
  }
  materials: {
    ['Material.011']: THREE.MeshStandardMaterial
  }
}

const Table = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(TableModelPath) as GLTFResult

  return (
    <group {...props} rotation={[0, Math.PI / 2, 0]} dispose={null}>
      <group position={[225.34, -170.6, -481.58]} scale={[1, 15.61, 1]}>
        <mesh
          geometry={nodes.Cube025.geometry}
          material={materials['Material.011']}
        />

        <mesh
          geometry={nodes.Cube025_1.geometry}
          material={materials['Material.011']}
        />
      </group>
    </group>
  )
}

export default Table
