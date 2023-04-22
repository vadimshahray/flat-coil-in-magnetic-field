import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import EngineModelPath from './engine.glb'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: {
    Cube004: THREE.Mesh
    Cube004_1: THREE.Mesh
    Cube004_2: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    button_on: THREE.Mesh
    handle_1: THREE.Mesh
  }
  materials: {
    metallic: THREE.MeshPhysicalMaterial
    black: THREE.MeshPhysicalMaterial
    grey_tabl: THREE.MeshStandardMaterial
    grey_button: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
  }
}

const WoodBlock = React.lazy(() => import('src/models/WoodBlock'))

const Engine = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(EngineModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 104, 0]}>
        <group scale={0.4} position={[0, 4, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <group
            position={[-169.62, 7.9, 15.07]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[15.06, 13.77, 337.81]}
          >
            <mesh
              geometry={nodes.Cube004.geometry}
              material={materials.metallic}
            />
            <mesh
              geometry={nodes.Cube004_1.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cube004_2.geometry}
              material={materials.grey_tabl}
            />
          </group>
          <mesh
            geometry={nodes.Cube001.geometry}
            material={materials.grey_button}
            position={[300.19, 281.96, -151.04]}
            scale={[3.61, 19.76, 19.78]}
          />
          <mesh
            geometry={nodes.Cube002.geometry}
            material={materials.grey_button}
            position={[300.19, 212.62, -151.04]}
            rotation={[0, 0, Math.PI]}
            scale={[3.61, 19.76, 19.78]}
          />
          <mesh
            geometry={nodes.button_on.geometry}
            material={materials.red}
            position={[255.71, 305.49, -202.32]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[22.49, 10.95, 15.01]}
          />
          <mesh
            geometry={nodes.handle_1.geometry}
            material={materials.metallic}
            position={[255.71, 290.87, 257.96]}
            rotation={[Math.PI / 2, 0.85, 0]}
            scale={[12.97, 34.12, 12.97]}
          />
        </group>
      </group>

      <WoodBlock args={[170, 104, 220]} position={[0, 52, 0]} />
    </group>
  )
}

export default Engine
