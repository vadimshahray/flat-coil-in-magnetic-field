import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import CoilModelPath from './coil.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { TerminalConnectingZone } from '@components'
import {
  selectModelingStatus,
  selectEngineRotationDirection,
  selectEngineRotationFrequency,
} from '@selectors'

type GLTFResult = GLTF & {
  nodes: {
    Cube012: THREE.Mesh
    Cube012_1: THREE.Mesh
    Cube012_2: THREE.Mesh
    Cube012_3: THREE.Mesh
    Cube016: THREE.Mesh
    Cube016_1: THREE.Mesh
    Cube016_2: THREE.Mesh
  }
  materials: {
    grey_plastic: THREE.MeshStandardMaterial
    au: THREE.MeshStandardMaterial
    metallic: THREE.MeshStandardMaterial
    metalica: THREE.MeshStandardMaterial
    cu: THREE.MeshPhysicalMaterial
  }
}

const WoodBlock = React.lazy(() => import('src/models/WoodBlock'))

const terminalPlusPosition = new THREE.Vector3(80, 18, 22)
const terminalMinusPosition = new THREE.Vector3(-80, 18, 22)

export default function Coil(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(CoilModelPath) as GLTFResult

  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    const state = store.getState()

    if (!ref.current) return

    if (selectModelingStatus(state) === 'idle')
      return (ref.current.rotation.z = 0)

    if (selectModelingStatus(state) !== 'started') return

    const direction = selectEngineRotationDirection(state) === 'left' ? 1 : -1

    ref.current.rotateZ(
      (direction * selectEngineRotationFrequency(state)) / 10 / 100,
    )
  })

  return (
    <group {...props} dispose={null}>
      <group position={[0, 70, 0]}>
        <group rotation={[0, Math.PI / 2, 0]} scale={4}>
          <group position={[0, 1.4, -25.13]} scale={[5.41, 1.2, 3.16]}>
            <mesh
              geometry={nodes.Cube012.geometry}
              material={materials.grey_plastic}
            />

            <mesh geometry={nodes.Cube012_1.geometry} material={materials.au} />

            <mesh
              geometry={nodes.Cube012_2.geometry}
              material={materials.metallic}
            />

            <mesh
              geometry={nodes.Cube012_3.geometry}
              material={materials.metalica}
            />
          </group>

          <group
            ref={ref}
            position={[0, 32.44, 0]}
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

      <WoodBlock args={[50, 70, 120]} position={[-100, 35, 0]} />

      <WoodBlock args={[50, 70, 120]} position={[100, 35, 0]} />
    </group>
  )
}
