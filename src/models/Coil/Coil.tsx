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
  selectMotorRotationDirection,
  selectMotorRotationFrequency,
} from '@selectors'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

const terminalPlusPosition = new THREE.Vector3(70, -36, 22)
const terminalMinusPosition = new THREE.Vector3(-70, -36, 22)

const Coil = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(CoilModelPath) as GLTFResult

  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    const state = store.getState()

    if (!ref.current) return

    if (selectModelingStatus(state) === 'idle')
      return (ref.current.rotation.x = Math.PI / 2)

    if (selectModelingStatus(state) !== 'started') return

    const direction = selectMotorRotationDirection(state) === 'left' ? 1 : -1

    ref.current.rotateX((direction * selectMotorRotationFrequency(state)) / 10)
  })

  return (
    <group {...props} dispose={null}>
      <group scale={110}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          scale={[0.98, 0.44, 0.19]}
        />

        <mesh
          ref={ref}
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[0, 0.27, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.69, 0.23, 0.01]}
        />
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
  )
}

export default Coil
