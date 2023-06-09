/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Tigrotto (https://sketchfab.com/Tigrotto)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/bookshelf-dark-wood-w-books-38e1654d4ec5464da1734dd315c61867
title: Bookshelf, Dark Wood w/ books
*/

import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import BookshelfModelPath from './bookshelf.glb'

type GLTFResult = GLTF & {
  nodes: {
    ['base_Material32-material_0']: THREE.Mesh
    ['base_Material33-material_0']: THREE.Mesh
    ['base_Material34-material_0']: THREE.Mesh
    ['base_Material35-material_0']: THREE.Mesh
    ['base_Material36-material_0']: THREE.Mesh
    ['base_Material37-material_0']: THREE.Mesh
    ['midshelf_Material32-material_0']: THREE.Mesh
    ['midshelf_Material33-material_0']: THREE.Mesh
    ['midshelf_Material34-material_0']: THREE.Mesh
    ['midshelf_Material35-material_0']: THREE.Mesh
    ['midshelf_Material36-material_0']: THREE.Mesh
    ['midshelf_Material37-material_0']: THREE.Mesh
    ['btmshelf_Material68-material_0']: THREE.Mesh
    ['btmshelf_Material69-material_0']: THREE.Mesh
    ['btmshelf_Material70-material_0']: THREE.Mesh
    ['btmshelf_Material71-material_0']: THREE.Mesh
    ['btmshelf_Material72-material_0']: THREE.Mesh
    ['btmshelf_Material73-material_0']: THREE.Mesh
    ['cabinets_Material50-material_0']: THREE.Mesh
    ['cabinets_Material51-material_0']: THREE.Mesh
    ['cabinets_Material55-material_0']: THREE.Mesh
    ['books_top_Material40-material_0']: THREE.Mesh
    ['books_mid_Material39-material_0']: THREE.Mesh
    ['books_btm_Material38-material_0']: THREE.Mesh
    ['topshelf_Material32-material_0']: THREE.Mesh
    ['topshelf_Material33-material_0']: THREE.Mesh
    ['topshelf_Material34-material_0']: THREE.Mesh
    ['topshelf_Material35-material_0']: THREE.Mesh
    ['topshelf_Material36-material_0']: THREE.Mesh
    ['topshelf_Material37-material_0']: THREE.Mesh
    ['frame_Material1-material_0']: THREE.Mesh
    ['frame_Material4-material_0']: THREE.Mesh
  }
  materials: {
    ['Material32-material']: THREE.MeshStandardMaterial
    ['Material33-material']: THREE.MeshStandardMaterial
    ['Material34-material']: THREE.MeshStandardMaterial
    ['Material35-material']: THREE.MeshStandardMaterial
    ['Material36-material']: THREE.MeshStandardMaterial
    ['Material37-material']: THREE.MeshStandardMaterial
    ['Material68-material']: THREE.MeshStandardMaterial
    ['Material69-material']: THREE.MeshStandardMaterial
    ['Material70-material']: THREE.MeshStandardMaterial
    ['Material71-material']: THREE.MeshStandardMaterial
    ['Material72-material']: THREE.MeshStandardMaterial
    ['Material73-material']: THREE.MeshStandardMaterial
    ['Material50-material']: THREE.MeshStandardMaterial
    ['Material51-material']: THREE.MeshStandardMaterial
    ['Material55-material']: THREE.MeshStandardMaterial
    ['Material40-material']: THREE.MeshStandardMaterial
    ['Material39-material']: THREE.MeshStandardMaterial
    ['Material38-material']: THREE.MeshStandardMaterial
    ['Material1-material']: THREE.MeshStandardMaterial
    ['Material4-material']: THREE.MeshStandardMaterial
  }
}

const Bookshelf = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(BookshelfModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group scale={3.6} position={[20, 0, -24]}>
        <group position={[-5.93, 6.06, 8.86]} scale={[358.09, 11.72, 87.71]}>
          <mesh
            geometry={nodes['base_Material32-material_0'].geometry}
            material={materials['Material32-material']}
          />
          <mesh
            geometry={nodes['base_Material33-material_0'].geometry}
            material={materials['Material33-material']}
          />
          <mesh
            geometry={nodes['base_Material34-material_0'].geometry}
            material={materials['Material34-material']}
          />
          <mesh
            geometry={nodes['base_Material35-material_0'].geometry}
            material={materials['Material35-material']}
          />
          <mesh
            geometry={nodes['base_Material36-material_0'].geometry}
            material={materials['Material36-material']}
          />
          <mesh
            geometry={nodes['base_Material37-material_0'].geometry}
            material={materials['Material37-material']}
          />
        </group>
        <group position={[-5.24, 218.35, -6.22]} scale={[329.78, 11.72, 59.88]}>
          <mesh
            geometry={nodes['midshelf_Material32-material_0'].geometry}
            material={materials['Material32-material']}
          />
          <mesh
            geometry={nodes['midshelf_Material33-material_0'].geometry}
            material={materials['Material33-material']}
          />
          <mesh
            geometry={nodes['midshelf_Material34-material_0'].geometry}
            material={materials['Material34-material']}
          />
          <mesh
            geometry={nodes['midshelf_Material35-material_0'].geometry}
            material={materials['Material35-material']}
          />
          <mesh
            geometry={nodes['midshelf_Material36-material_0'].geometry}
            material={materials['Material36-material']}
          />
          <mesh
            geometry={nodes['midshelf_Material37-material_0'].geometry}
            material={materials['Material37-material']}
          />
        </group>
        <group
          position={[-3.67, 137.99, 11.29]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[95.11, 343.67, 6.12]}
        >
          <mesh
            geometry={nodes['btmshelf_Material68-material_0'].geometry}
            material={materials['Material68-material']}
          />
          <mesh
            geometry={nodes['btmshelf_Material69-material_0'].geometry}
            material={materials['Material69-material']}
          />
          <mesh
            geometry={nodes['btmshelf_Material70-material_0'].geometry}
            material={materials['Material70-material']}
          />
          <mesh
            geometry={nodes['btmshelf_Material71-material_0'].geometry}
            material={materials['Material71-material']}
          />
          <mesh
            geometry={nodes['btmshelf_Material72-material_0'].geometry}
            material={materials['Material72-material']}
          />
          <mesh
            geometry={nodes['btmshelf_Material73-material_0'].geometry}
            material={materials['Material73-material']}
          />
        </group>
        <group
          position={[-4.03, 72.73, 8.24]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[343.08, 87.33, 122.25]}
        >
          <mesh
            geometry={nodes['cabinets_Material50-material_0'].geometry}
            material={materials['Material50-material']}
          />
          <mesh
            geometry={nodes['cabinets_Material51-material_0'].geometry}
            material={materials['Material51-material']}
          />
          <mesh
            geometry={nodes['cabinets_Material55-material_0'].geometry}
            material={materials['Material55-material']}
          />
        </group>
        <group
          position={[-1.71, 353.39, -5.51]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[559.01, 264.33, 260.51]}
        >
          <mesh
            geometry={nodes['books_top_Material40-material_0'].geometry}
            material={materials['Material40-material']}
          />
        </group>
        <group
          position={[-2.68, 252.03, -5.49]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[583.3, 264.33, 257.71]}
        >
          <mesh
            geometry={nodes['books_mid_Material39-material_0'].geometry}
            material={materials['Material39-material']}
          />
        </group>
        <group
          position={[-4.87, 163.27, -6.65]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[506.01, 264.33, 249.78]}
        >
          <mesh
            geometry={nodes['books_btm_Material38-material_0'].geometry}
            material={materials['Material38-material']}
          />
        </group>
        <group position={[-2.46, 321.74, -6.32]} scale={[330.84, 11.72, 59.88]}>
          <mesh
            geometry={nodes['topshelf_Material32-material_0'].geometry}
            material={materials['Material32-material']}
          />
          <mesh
            geometry={nodes['topshelf_Material33-material_0'].geometry}
            material={materials['Material33-material']}
          />
          <mesh
            geometry={nodes['topshelf_Material34-material_0'].geometry}
            material={materials['Material34-material']}
          />
          <mesh
            geometry={nodes['topshelf_Material35-material_0'].geometry}
            material={materials['Material35-material']}
          />
          <mesh
            geometry={nodes['topshelf_Material36-material_0'].geometry}
            material={materials['Material36-material']}
          />
          <mesh
            geometry={nodes['topshelf_Material37-material_0'].geometry}
            material={materials['Material37-material']}
          />
        </group>
        <group position={[-5.04, 280.27, -6.23]} scale={[342.85, 298.6, 59.88]}>
          <mesh
            geometry={nodes['frame_Material1-material_0'].geometry}
            material={materials['Material1-material']}
          />
          <mesh
            geometry={nodes['frame_Material4-material_0'].geometry}
            material={materials['Material4-material']}
          />
        </group>
      </group>
    </group>
  )
}

export default Bookshelf
