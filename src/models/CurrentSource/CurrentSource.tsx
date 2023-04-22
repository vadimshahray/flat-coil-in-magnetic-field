import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import { TerminalConnectingZone } from '@components'
import CurrentSourceModelPath from './currentSource.glb'
import { degToRad } from 'three/src/math/MathUtils'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
    Cube_4: THREE.Mesh
    Cube_5: THREE.Mesh
    Cube_6: THREE.Mesh
    Cylinder_1: THREE.Mesh
    Cylinder_2: THREE.Mesh
    power: THREE.Mesh
  }
  materials: {
    backgrond: THREE.MeshStandardMaterial
    white: THREE.MeshStandardMaterial
    very_gray: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
    tabl_background: THREE.MeshStandardMaterial
    ['blue.001']: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    power: THREE.MeshStandardMaterial
  }
}

const CurrentSource = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(CurrentSourceModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 6, 0]} rotation={[0, degToRad(30), 0]}>
        <group
          position={[-0.37, 106.12, 0.09]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[101.5, 111.61, 114.5]}
        >
          <mesh geometry={nodes.Cube.geometry} material={materials.backgrond} />
          <mesh geometry={nodes.Cube_1.geometry} material={materials.white} />
          <mesh
            geometry={nodes.Cube_2.geometry}
            material={materials.very_gray}
          />
          <mesh geometry={nodes.Cube_3.geometry} material={materials.black} />
          <mesh
            geometry={nodes.Cube_4.geometry}
            material={materials.tabl_background}
          />
          <mesh
            geometry={nodes.Cube_5.geometry}
            material={materials['blue.001']}
          />
          <mesh geometry={nodes.Cube_6.geometry} material={materials.red} />
        </group>
        <group
          position={[68.25, 145.31, 110.7]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-17.51, -8.23, -17.51]}
        >
          <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes.Cylinder_2.geometry}
            material={materials.tabl_background}
          />
        </group>

        <mesh
          geometry={nodes.power.geometry}
          material={materials.power}
          position={[68.25, 58.92, 106.5]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[3.92, 5.58, 5.58]}
        />

        <TerminalConnectingZone
          terminal='CurrentSource+'
          position={new THREE.Vector3(0, 68, 116)}
        />

        <TerminalConnectingZone
          terminal='CurrentSource-'
          position={new THREE.Vector3(-68, 68, 116)}
        />
      </group>
    </group>
  )
}

export default CurrentSource
