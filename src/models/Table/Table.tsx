import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import TableModelPath from './table.glb'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: {
    TableBase__0: THREE.Mesh
    TableStructure__0: THREE.Mesh
  }
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial
  }
}

const Table = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(TableModelPath) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, -Math.PI / 2, 0]}
      scale={0.5}
    >
      <mesh
        geometry={nodes.TableBase__0.geometry}
        material={materials['Scene_-_Root']}
        position={[0, 511.54, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[394.8, 520.83, 9.38]}
      />

      <mesh
        geometry={nodes.TableStructure__0.geometry}
        material={materials['Scene_-_Root']}
        position={[0, 242.01, -418.66]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[10.19, 302.94, 29.51]}
      />
    </group>
  )
}

export default Table
