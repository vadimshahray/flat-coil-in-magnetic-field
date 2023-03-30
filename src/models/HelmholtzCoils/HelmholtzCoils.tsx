import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import HelmholtzCoilsModelPath from './HelmholtzCoils.glb'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder058: THREE.Mesh
    Cylinder058_1: THREE.Mesh
    Cylinder058_2: THREE.Mesh
    Cylinder058_3: THREE.Mesh
    Cylinder058_4: THREE.Mesh
    Cylinder058_5: THREE.Mesh
  }
  materials: {
    cuprium: THREE.MeshPhysicalMaterial
    blue: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
    grey_plastic: THREE.MeshPhysicalMaterial
    very_grey_plastic: THREE.MeshPhysicalMaterial
    black_plastic: THREE.MeshStandardMaterial
  }
}

const HelmholtzCoils = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(HelmholtzCoilsModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 194.46, 347.23]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[157.63, 0.45, 157.63]}
      >
        <mesh
          geometry={nodes.Cylinder058.geometry}
          material={materials.cuprium}
        />
        <mesh
          geometry={nodes.Cylinder058_1.geometry}
          material={materials.blue}
        />
        <mesh
          geometry={nodes.Cylinder058_2.geometry}
          material={materials.red}
        />
        <mesh
          geometry={nodes.Cylinder058_3.geometry}
          material={materials.grey_plastic}
        />
        <mesh
          geometry={nodes.Cylinder058_4.geometry}
          material={materials.very_grey_plastic}
        />
        <mesh
          geometry={nodes.Cylinder058_5.geometry}
          material={materials.black_plastic}
        />
      </group>
    </group>
  )
}

export default HelmholtzCoils
