import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import TerminalModelPath from './terminal.glb'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder010: THREE.Mesh
    Cylinder010_1: THREE.Mesh
    Cylinder010_2: THREE.Mesh
  }
  materials: {
    black: THREE.MeshStandardMaterial
  }
}

type Props = {
  color: string
} & JSX.IntrinsicElements['group']

const Terminal = ({ color, ...props }: Props) => {
  const { nodes, materials } = useGLTF(TerminalModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={5}>
        <mesh geometry={nodes.Cylinder010.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>

        <mesh geometry={nodes.Cylinder010_1.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>

        <mesh
          geometry={nodes.Cylinder010_2.geometry}
          material={materials.black}
        />
      </group>
    </group>
  )
}

export default Terminal
