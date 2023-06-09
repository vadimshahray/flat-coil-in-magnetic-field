/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Andrew.Mischenko (https://sketchfab.com/Andrew.Mischenko)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/simple-sink-73bda35b6e7a499a80427fc1b049b192
title: Simple Sink
*/

import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import SinkModelPath from './sink.glb'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: {
    polySurface2_drain_surface_0: THREE.Mesh
    polySurface2_sink_inner_surface_0: THREE.Mesh
    polySurface2_sink_metal_surface_0: THREE.Mesh
    polySurface2_pipe_surface_0: THREE.Mesh
    polySurface2_sink_pipe_second_surface_0: THREE.Mesh
  }
  materials: {
    drain_surface: THREE.MeshStandardMaterial
    sink_inner_surface: THREE.MeshStandardMaterial
    sink_metal_surface: THREE.MeshStandardMaterial
    pipe_surface: THREE.MeshStandardMaterial
    sink_pipe_second_surface: THREE.MeshStandardMaterial
  }
}

const Sink = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(SinkModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        scale={11}
        rotation={[0, -Math.PI / 2, 0]}
        position={[0, 246, 140]}
      >
        <mesh
          geometry={nodes.polySurface2_drain_surface_0.geometry}
          material={materials.drain_surface}
        />
        <mesh
          geometry={nodes.polySurface2_sink_inner_surface_0.geometry}
          material={materials.sink_inner_surface}
        />
        <mesh
          geometry={nodes.polySurface2_sink_metal_surface_0.geometry}
          material={materials.sink_metal_surface}
        />
        <mesh
          geometry={nodes.polySurface2_pipe_surface_0.geometry}
          material={materials.pipe_surface}
        />
        <mesh
          geometry={nodes.polySurface2_sink_pipe_second_surface_0.geometry}
          material={materials.sink_pipe_second_surface}
        />
      </group>
    </group>
  )
}

export default Sink
