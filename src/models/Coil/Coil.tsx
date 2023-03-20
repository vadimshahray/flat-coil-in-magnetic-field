import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import CoilModelPath from './coil.glb'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

const Coil = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(CoilModelPath) as GLTFResult

  return (
    <group {...props} dispose={null} scale={70}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={[0.98, 0.44, 0.19]}
      />

      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, 0.27, 0]}
        scale={[0.69, 0.23, 0.01]}
      />
    </group>
  )
}

export default Coil
