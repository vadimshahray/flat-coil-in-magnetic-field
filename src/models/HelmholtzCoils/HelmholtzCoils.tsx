import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import HelmholtzCoilsModelPath from './HelmholtzCoils.glb'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder010: THREE.Mesh
    Cylinder010_1: THREE.Mesh
    Cylinder010_2: THREE.Mesh
    Cylinder010_3: THREE.Mesh
    Cylinder010_4: THREE.Mesh
    Cylinder010_5: THREE.Mesh
  }
  materials: {
    синий: THREE.MeshStandardMaterial
    красный: THREE.MeshStandardMaterial
    металл: THREE.MeshStandardMaterial
    дерево: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    черный: THREE.MeshStandardMaterial
  }
}

const HelmholtzCoils = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(HelmholtzCoilsModelPath) as GLTFResult

  return (
    <group {...props} scale={0.5} dispose={null}>
      <group
        position={[52.54, -164.24, -157.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 0.25, 0.04]}
      >
        <mesh
          geometry={nodes.Cylinder010.geometry}
          material={materials.синий}
        />

        <mesh
          geometry={nodes.Cylinder010_1.geometry}
          material={materials.красный}
        />

        <mesh
          geometry={nodes.Cylinder010_2.geometry}
          material={materials.металл}
        />

        <mesh
          geometry={nodes.Cylinder010_3.geometry}
          material={materials.дерево}
        />

        <mesh
          geometry={nodes.Cylinder010_4.geometry}
          material={materials['Material.002']}
        />

        <mesh
          geometry={nodes.Cylinder010_5.geometry}
          material={materials.черный}
        />
      </group>
    </group>
  )
}

export default HelmholtzCoils
