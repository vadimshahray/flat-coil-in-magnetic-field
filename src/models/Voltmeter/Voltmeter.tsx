import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { addInsignificantZeros } from '@utils'
import VoltmeterModelPath from './voltmeter.glb'
import { Text, useGLTF } from '@react-three/drei'
import { TerminalConnectingZone } from '@components'
import FiraCode from 'src/assets/fonts/firacode_light.woff'
import {
  selectIsVoltmeterConnected,
  selectModelingOperatingVoltage,
} from '@selectors'

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
  }
}

const Voltmeter = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(VoltmeterModelPath) as GLTFResult

  const textRef = useRef<Text & { text: string }>()
  const textSIRef = useRef<THREE.Mesh>()

  useFrame(() => {
    if (!textRef.current) return

    const isVoltmeterConnected = selectIsVoltmeterConnected(store.getState())
    const voltage = selectModelingOperatingVoltage(store.getState())

    textRef.current.text = isVoltmeterConnected
      ? addInsignificantZeros((voltage < 10 ? ' ' : '') + voltage.toFixed(2), 1)
      : ''

    if (!textSIRef.current) return
    textSIRef.current.visible = isVoltmeterConnected
  })

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 24.49, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[20, 25, 50]}
      >
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials['Material.002']}
        />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.blue} />
      </group>

      <group scale={[0.65, 1, 1]} position={[-7, 24, 18]}>
        <Text ref={textRef} fontSize={32} color='red' font={FiraCode}>
          {' '}
        </Text>

        <Text
          ref={textSIRef}
          fontSize={24}
          color='red'
          position={[56, -3, 0]}
          font={FiraCode}
        >
          V
        </Text>
      </group>

      <TerminalConnectingZone
        terminal='Voltmeter+'
        color='#832D2E'
        rotation={[0, Math.PI, 0]}
        position={[34, 8, -35]}
      />

      <TerminalConnectingZone
        terminal='Voltmeter-'
        color='#4C4C8A'
        rotation={[0, Math.PI, 0]}
        position={[-34, 8, -35]}
      />
    </group>
  )
}

export default Voltmeter
