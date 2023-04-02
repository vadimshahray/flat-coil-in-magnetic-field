import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import AmperageGeneratorModelPath from './amperageGenerator.glb'

type GLTFResult = GLTF & {
  nodes: {
    counter_1: THREE.Mesh
    counter_2: THREE.Mesh
    counter_3: THREE.Mesh
    counter_4: THREE.Mesh
    counter_5: THREE.Mesh
    counter_6: THREE.Mesh
    counter_7: THREE.Mesh
    counter_8: THREE.Mesh
    counter_9: THREE.Mesh
  }
  materials: {
    grey_3: THREE.MeshStandardMaterial
    grey_2: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
    white: THREE.MeshStandardMaterial
    grey_4: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
    grey: THREE.MeshStandardMaterial
    yellow: THREE.MeshStandardMaterial
    green: THREE.MeshStandardMaterial
  }
}

const AmperageGenerator = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(AmperageGeneratorModelPath) as GLTFResult

  return (
    <group {...props} dispose={null} scale={3} rotation={[0, -Math.PI / 2, 0]}>
      <group scale={[0.57, 0.24, 0.48]}>
        <mesh geometry={nodes.counter_1.geometry} material={materials.grey_3} />
        <mesh geometry={nodes.counter_2.geometry} material={materials.grey_2} />
        <mesh geometry={nodes.counter_3.geometry} material={materials.black} />
        <mesh geometry={nodes.counter_4.geometry} material={materials.white} />
        <mesh geometry={nodes.counter_5.geometry} material={materials.grey_4} />
        <mesh geometry={nodes.counter_6.geometry} material={materials.red} />
        <mesh geometry={nodes.counter_7.geometry} material={materials.grey} />
        <mesh geometry={nodes.counter_8.geometry} material={materials.yellow} />
        <mesh geometry={nodes.counter_9.geometry} material={materials.green} />
      </group>
    </group>
  )
}

export default AmperageGenerator
