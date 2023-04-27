import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { addInsignificantZeros } from '@utils'
import VoltmeterModelPath from './voltmeter.glb'
import { Text, useGLTF } from '@react-three/drei'
import { TerminalConnectingZone } from '@components'
import { selectIsVoltmeterConnected, selectModelingVoltage } from '@selectors'
type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
    Cube_4: THREE.Mesh
    Cube_5: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    very_grey_plastic: THREE.MeshPhysicalMaterial
    red: THREE.MeshStandardMaterial
  }
}

const terminalPlusPosition = new THREE.Vector3(30, -10, -35)
const terminalMinusPosition = new THREE.Vector3(-30, -10, -35)

const Voltmeter = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(VoltmeterModelPath) as GLTFResult

  const textRef = useRef<Text & { text: string }>()

  useFrame(() => {
    if (textRef.current) {
      const isVoltmeterConnected = selectIsVoltmeterConnected(store.getState())

      textRef.current.text = isVoltmeterConnected
        ? addInsignificantZeros(
            selectModelingVoltage(store.getState()).toFixed(2),
            1,
          )
        : ''
    }
  })

  return (
    <group {...props} dispose={null}>
      <group position={[0, 24.49, 0]}>
        <group rotation={[0, -Math.PI / 2, 0]} scale={[20, 25, 50]}>
          <mesh
            geometry={nodes.Cube_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            geometry={nodes.Cube_2.geometry}
            material={materials['Material.002']}
          />
          <mesh geometry={nodes.Cube_3.geometry} material={materials.blue} />
          <mesh
            geometry={nodes.Cube_4.geometry}
            material={materials.very_grey_plastic}
          />
          <mesh geometry={nodes.Cube_5.geometry} material={materials.red} />
        </group>

        <TerminalConnectingZone
          terminal='Voltmeter+'
          position={terminalPlusPosition}
        />

        <TerminalConnectingZone
          terminal='Voltmeter-'
          position={terminalMinusPosition}
        />

        <Text
          ref={textRef}
          fontSize={34}
          color='#F44336'
          scale={[0.7, 1, 1]}
          position={[0, -1.5, 18]}
          font='https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/woff/FiraCode-Light.woff'
        >
          {' '}
        </Text>
      </group>
    </group>
  )
}

export default Voltmeter
