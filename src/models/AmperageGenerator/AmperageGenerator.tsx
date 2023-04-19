import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import AmperageGeneratorModelPath from './amperageGenerator.glb'
import { TerminalConnectingZone } from '@components'

type GLTFResult = GLTF & {
  nodes: {
    Cube003: THREE.Mesh
    Cube003_1: THREE.Mesh
    Cube003_2: THREE.Mesh
    Cube003_3: THREE.Mesh
    Cube003_4: THREE.Mesh
    Cube003_5: THREE.Mesh
    Cube003_6: THREE.Mesh
    Cylinder: THREE.Mesh
    power: THREE.Mesh
  }
  materials: {
    tabl_background: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
    white: THREE.MeshStandardMaterial
    backgrond: THREE.MeshStandardMaterial
    very_gray: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    power: THREE.MeshStandardMaterial
  }
}

const AmperageGenerator = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(AmperageGeneratorModelPath) as GLTFResult

  return (
    <group rotation={[0, -Math.PI / 2, 0]} {...props} dispose={null}>
      <group position={[0, 68, 0]}>
        <group scale={0.6}>
          <group position={[97.4, -47.89, 33.75]} scale={[4.65, 35, 54.2]}>
            <mesh
              geometry={nodes.Cube003.geometry}
              material={materials.tabl_background}
            />
            <mesh
              geometry={nodes.Cube003_1.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cube003_2.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Cube003_3.geometry}
              material={materials.backgrond}
            />
            <mesh
              geometry={nodes.Cube003_4.geometry}
              material={materials.very_gray}
            />
            <mesh
              geometry={nodes.Cube003_5.geometry}
              material={materials.red}
            />
            <mesh
              geometry={nodes.Cube003_6.geometry}
              material={materials.blue}
            />
          </group>

          <mesh
            geometry={nodes.Cylinder.geometry}
            material={nodes.Cylinder.material}
            position={[110.03, 38.69, -68.62]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[-19.1, -8.98, -19.1]}
          />

          <mesh
            geometry={nodes.power.geometry}
            material={materials.power}
            position={[105.13, -47.2, -68.62]}
            scale={[3.92, 5.58, 5.58]}
          />
        </group>

        <TerminalConnectingZone
          terminal='AmperageGenerator+'
          position={new THREE.Vector3(70, -22, 3)}
        />
        <TerminalConnectingZone
          terminal='AmperageGenerator-'
          position={new THREE.Vector3(70, -22, 40)}
        />
      </group>
    </group>
  )
}

export default AmperageGenerator
