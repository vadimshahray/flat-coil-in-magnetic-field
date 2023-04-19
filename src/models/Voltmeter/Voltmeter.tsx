import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { addInsignificantZeros } from '@utils'
import VoltmeterModelPath from './voltmeter.glb'
import { Text, useGLTF } from '@react-three/drei'
import { selectVoltmeterVolts } from '@selectors'
import { TerminalConnectingZone } from '@components'

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

const terminalPlusPosition = new THREE.Vector3(30, -10, -35)
const terminalMinusPosition = new THREE.Vector3(-30, -10, -35)

const Voltmeter = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(VoltmeterModelPath) as GLTFResult

  const textRef = useRef<Text & { text: string }>()

  useFrame(() => {
    if (textRef.current) {
      textRef.current.text = addInsignificantZeros(
        selectVoltmeterVolts(store.getState()).toFixed(2),
        2,
      )
    }
  })

  return (
    <group {...props} dispose={null}>
      <group position={[0, 26, 0]}>
        <group
          scale={[20, 25, 50]}
          rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
        >
          <mesh
            geometry={nodes.Cube_1.geometry}
            material={materials['Material.001']}
          />

          <mesh
            geometry={nodes.Cube_2.geometry}
            material={materials['Material.002']}
          />
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
