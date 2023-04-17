/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: andreadev3d (https://sketchfab.com/andreadev)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ventilatore-bcb7c07cb1c648dd8871db5e01468ea3
title: Ventilatore
*/

import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import FanModelPath from './fan.glb'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: {
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
    Object_7: THREE.Mesh
    Object_8: THREE.Mesh
    Object_9: THREE.Mesh
  }
  materials: {
    cromato: THREE.MeshStandardMaterial
    grigio: THREE.MeshStandardMaterial
    nero: THREE.MeshStandardMaterial
  }
}

const Fan = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(FanModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={420}>
        <mesh geometry={nodes.Object_3.geometry} material={materials.cromato} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.grigio} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.grigio} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.grigio} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.nero} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.nero} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.nero} />
      </group>
    </group>
  )
}

export default Fan
