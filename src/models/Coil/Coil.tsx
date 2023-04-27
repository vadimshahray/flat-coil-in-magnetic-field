import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import CoilModelPath from './coil.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { TerminalConnectingZone } from '@components'
import {
  selectEngineIsPowerSupplied,
  selectEngineRotationFrequency,
} from '@selectors'

type GLTFResult = GLTF & {
  nodes: {
    handle: THREE.Mesh
    Cube016: THREE.Mesh
    Cube016_1: THREE.Mesh
    Cube016_2: THREE.Mesh
    axis: THREE.Mesh
    Cube013: THREE.Mesh
    Cube013_1: THREE.Mesh
    Cube013_2: THREE.Mesh
    Cube013_3: THREE.Mesh
    Cube013_4: THREE.Mesh
    Cube013_5: THREE.Mesh
  }
  materials: {
    metallic: THREE.MeshStandardMaterial
    cu: THREE.MeshPhysicalMaterial
    grey_plastic: THREE.MeshStandardMaterial
    au: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    very_grey_plastic: THREE.MeshPhysicalMaterial
    red: THREE.MeshStandardMaterial
  }
}

const WoodBlock = React.lazy(() => import('src/models/WoodBlock'))

const terminalPlusPosition = new THREE.Vector3(118, 96, 0)
const terminalMinusPosition = new THREE.Vector3(-118, 96, 0)

const Coil = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(CoilModelPath) as GLTFResult

  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    const state = store.getState()

    if (!ref.current) return

    if (!selectEngineIsPowerSupplied(state)) return

    ref.current.rotateZ(selectEngineRotationFrequency(state) / 10 / 100)
  })

  return (
    <group {...props} dispose={null}>
      <group position={[0, 70, 0]}>
        <group scale={[4.6, 4, 4]}>
          <mesh
            geometry={nodes.handle.geometry}
            material={materials.metallic}
            position={[29.98, 32.56, -0.21]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.83, 21.06, 0.83]}
          />
          <group
            position={[-0.26, 32.57, -0.21]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.17, 10.24, 13.31]}
          >
            <mesh geometry={nodes.Cube016.geometry} material={materials.cu} />
            <mesh
              geometry={nodes.Cube016_1.geometry}
              material={materials.grey_plastic}
            />
            <mesh
              geometry={nodes.Cube016_2.geometry}
              material={nodes.Cube016_2.material}
            />
          </group>
          <mesh
            geometry={nodes.axis.geometry}
            material={materials.metallic}
            position={[29.98, 32.56, -0.21]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.83, 4.06, 0.83]}
          />
          <group
            position={[-3.67, 19.62, -0.21]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[5.41, 1.2, 3.16]}
          >
            <mesh
              geometry={nodes.Cube013.geometry}
              material={materials.grey_plastic}
            />
            <mesh geometry={nodes.Cube013_1.geometry} material={materials.au} />
            <mesh
              geometry={nodes.Cube013_2.geometry}
              material={materials.metallic}
            />
            <mesh
              geometry={nodes.Cube013_3.geometry}
              material={materials.blue}
            />
            <mesh
              geometry={nodes.Cube013_4.geometry}
              material={materials.very_grey_plastic}
            />
            <mesh
              geometry={nodes.Cube013_5.geometry}
              material={materials.red}
            />
          </group>
        </group>

        <TerminalConnectingZone
          terminal='Coil+'
          position={terminalPlusPosition}
        />

        <TerminalConnectingZone
          terminal='Coil-'
          position={terminalMinusPosition}
        />
      </group>

      <WoodBlock args={[50, 70, 120]} position={[-135, 35, 0]} />

      <WoodBlock args={[50, 70, 120]} position={[135, 35, 0]} />
    </group>
  )
}

export default Coil
