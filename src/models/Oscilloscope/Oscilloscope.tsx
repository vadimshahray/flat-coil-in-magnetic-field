import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import OscilloscopeModelPath from './oscilloscope.glb'
import { OscilloscopeDisplay } from './OscilloscopeDisplay'

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
    Cube_4: THREE.Mesh
    Cube_5: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder_1: THREE.Mesh
    power: THREE.Mesh
    ['-']: THREE.Mesh
    ['+']: THREE.Mesh
  }
  materials: {
    Corp: THREE.MeshStandardMaterial
    blue: THREE.MeshPhysicalMaterial
    Black_line: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
    metall: THREE.MeshPhysicalMaterial
    tabl_background: THREE.MeshStandardMaterial
    power: THREE.MeshStandardMaterial
    very_blue: THREE.MeshStandardMaterial
  }
}

const Oscilloscope = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(OscilloscopeModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group>
        <group
          position={[-2.81, 99.09, -7.23]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[75, 100, 150]}
        >
          <mesh geometry={nodes.Cube_1.geometry} material={materials.Corp} />
          <mesh geometry={nodes.Cube_2.geometry} material={materials.blue} />
          <mesh
            geometry={nodes.Cube_3.geometry}
            material={materials.Black_line}
          />
          <mesh geometry={nodes.Cube_4.geometry} material={materials.black} />
          <mesh geometry={nodes.Cube_5.geometry} material={materials.metall} />
        </group>
        <group
          position={[107.87, 32.62, 74.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-12.81, -6.02, -12.81]}
        >
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={materials.tabl_background}
          />
          <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Black_line}
          />
        </group>
        <mesh
          geometry={nodes.power.geometry}
          material={materials.power}
          position={[-126.22, 30.47, 70.3]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[3.92, 5.58, 5.58]}
        />
        <mesh
          geometry={nodes['-'].geometry}
          material={materials.very_blue}
          position={[24.11, 30.47, 70.3]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[3.92, 5.58, 5.58]}
        />
        <mesh
          geometry={nodes['+'].geometry}
          material={materials.very_blue}
          position={[60.61, 30.47, 70.3]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[3.92, 5.58, 5.58]}
        />
      </group>

      <OscilloscopeDisplay
        width={200}
        height={124}
        position={[0, 124 / 2 + 52, 70]}
      />
    </group>
  )
}

export default Oscilloscope
