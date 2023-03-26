import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import TableModelPath from './table.glb'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: {
    Plane001_FLOOR_0: THREE.Mesh
    Jenson_Extending_Table_DarkStainedOak_DARK_STAIN_OAK_0: THREE.Mesh
  }
  materials: {
    FLOOR: THREE.MeshStandardMaterial
    DARK_STAIN_OAK: THREE.MeshStandardMaterial
  }
}

const Table = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(TableModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Plane001_FLOOR_0.geometry}
              material={materials.FLOOR}
            />
          </group>
          <group position={[0, 0.1, 0]}>
            <group position={[55.62, -6.29, -169.42]}>
              <mesh
                geometry={
                  nodes.Jenson_Extending_Table_DarkStainedOak_DARK_STAIN_OAK_0
                    .geometry
                }
                material={materials.DARK_STAIN_OAK}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Table
