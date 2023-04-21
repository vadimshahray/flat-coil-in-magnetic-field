/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: humoyun (https://sketchfab.com/humoyu)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/window-dcca6a944c16426d8f775febae2d8ff4
title: Window
*/

import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import WindowModelPath from './window.glb'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: {
    Plane_4_PBR1_0: THREE.Mesh
    Plane_3_PBR1_0: THREE.Mesh
    Plane_2_PBR1_0: THREE.Mesh
    Disc__0: THREE.Mesh
    Tube_PBR_0: THREE.Mesh
    Cylinder_1_PBR2_0: THREE.Mesh
    Cylinder_PBR2_0: THREE.Mesh
    Plane_1_PBR_0: THREE.Mesh
    Plane_PBR_0: THREE.Mesh
  }
  materials: {
    ['PBR.1']: THREE.MeshStandardMaterial
    Disc__0: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    ['PBR.2']: THREE.MeshStandardMaterial
  }
}

const Window = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(WindowModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group scale={2} position={[0, -65, 0]} rotation={[0, Math.PI, 0]}>
        <group
          position={[294.55, 746.44, -1513.97]}
          rotation={[-Math.PI, -1.39, 2.85]}
        />

        <group position={[37.2, 333.26, -45.45]} rotation={[0, 0, -1.59]}>
          <mesh
            geometry={nodes.Disc__0.geometry}
            material={materials.Disc__0}
          />
        </group>
        <group position={[99.24, 334.61, -12.87]} rotation={[-1.6, 0, 0]}>
          <mesh
            geometry={nodes.Tube_PBR_0.geometry}
            material={materials.material}
          />
        </group>
        <group position={[-121.57, 538.83, 0]}>
          <mesh
            geometry={nodes.Cylinder_1_PBR2_0.geometry}
            material={materials['PBR.2']}
          />
        </group>
        <group position={[-121.57, 64.99, 0]}>
          <mesh
            geometry={nodes.Cylinder_PBR2_0.geometry}
            material={materials['PBR.2']}
          />
        </group>
        <group position={[100.7, 309.82, -11.53]} rotation={[-1.57, 0, 0]}>
          <mesh
            geometry={nodes.Plane_1_PBR_0.geometry}
            material={materials.material}
          />
        </group>
        <group position={[-354.68, 296.8, 0]} rotation={[1.57, 0, 0]}>
          <mesh
            geometry={nodes.Plane_PBR_0.geometry}
            material={materials.material}
          />
        </group>
      </group>
    </group>
  )
}

export default Window
