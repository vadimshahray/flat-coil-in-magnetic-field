import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import { Text, useGLTF } from '@react-three/drei'
import { TerminalConnectingZone } from '@components'
import CurrentSourceModelPath from './currentSource.glb'
import { useFrame, ThreeEvent } from '@react-three/fiber'
import {
  setCurrentSourceAmperage,
  setCurrentSourceIsPowerSupplied,
} from '@slices'
import {
  selectCurrentSourceAmperage,
  selectCurrentSourceIsPowerSupplied,
} from '@selectors'
import {
  CURRENT_SOURCE_AMPERAGE_MAX,
  CURRENT_SOURCE_AMPERAGE_MIN,
  CURRENT_SOURCE_AMPERAGE_STEP,
} from '@constants'
import {
  numberBetween,
  setDefaultCursor,
  setPointerCursor,
  setRotationCursor,
  addInsignificantZeros,
} from '@utils'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder002: THREE.Mesh
    Cylinder002_1: THREE.Mesh
    power: THREE.Mesh
    Text006: THREE.Mesh
    Text006_1: THREE.Mesh
    Text006_2: THREE.Mesh
    Text006_3: THREE.Mesh
    Text006_4: THREE.Mesh
    Text006_5: THREE.Mesh
  }
  materials: {
    tabl_background: THREE.MeshStandardMaterial
    Black_line: THREE.MeshStandardMaterial
    power: THREE.MeshStandardMaterial
    metall: THREE.MeshPhysicalMaterial
    blue: THREE.MeshStandardMaterial
    grey: THREE.MeshStandardMaterial
    black_line: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
  }
}

const powerBtnPositionZ = 103.5

const amperageSwitchRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0)

const CurrentSource = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(CurrentSourceModelPath) as GLTFResult

  const textRef = useRef<Text & { text: string }>()
  const powerBtnRef = useRef<THREE.Mesh>(null)
  const amperageSwitchRef = useRef<THREE.Group>(null)

  useFrame(() => {
    const amperage = selectCurrentSourceAmperage(store.getState())
    const isPowerSupplied = selectCurrentSourceIsPowerSupplied(store.getState())

    if (textRef.current) {
      textRef.current.text = isPowerSupplied
        ? addInsignificantZeros(amperage.toFixed(2), 1)
        : ''
    }

    powerBtnRef.current?.position?.setZ(
      isPowerSupplied ? powerBtnPositionZ - 6 : powerBtnPositionZ,
    )

    const angle =
      Math.PI / 2 - (Math.PI * amperage) / CURRENT_SOURCE_AMPERAGE_MAX

    amperageSwitchRotation.set(
      amperageSwitchRotation.x,
      angle,
      amperageSwitchRotation.z,
    )

    amperageSwitchRef.current?.setRotationFromEuler(amperageSwitchRotation)
  })

  const handlePowerClick = () => {
    const isPowerSupplied = selectCurrentSourceIsPowerSupplied(store.getState())

    store.dispatch(setCurrentSourceIsPowerSupplied(!isPowerSupplied))
  }

  const handleWheel = (e: ThreeEvent<WheelEvent>) => {
    const amperage = selectCurrentSourceAmperage(store.getState())

    const newAmperage =
      amperage + Math.sign(-e.deltaY) * CURRENT_SOURCE_AMPERAGE_STEP * 3
    const newRoundedAmperage =
      Math.round((newAmperage + Number.EPSILON) * 100) / 100

    store.dispatch(
      setCurrentSourceAmperage(
        numberBetween(
          newRoundedAmperage,
          CURRENT_SOURCE_AMPERAGE_MIN,
          CURRENT_SOURCE_AMPERAGE_MAX,
        ),
      ),
    )
  }

  return (
    <group {...props} dispose={null}>
      <group
        ref={amperageSwitchRef}
        position={[5.84, 1.85, 105.19]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-12.81, -6.02, -12.81]}
        onPointerEnter={setRotationCursor}
        onPointerLeave={setDefaultCursor}
        onWheel={handleWheel}
      >
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={materials.tabl_background}
        />
        <mesh
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.Black_line}
        />
      </group>

      <mesh
        ref={powerBtnRef}
        geometry={nodes.power.geometry}
        material={materials.power}
        position={[94.96, 0.85, 102.85]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.92, 5.58, 5.58]}
        onClick={handlePowerClick}
        onPointerEnter={setPointerCursor}
        onPointerLeave={setDefaultCursor}
      />

      <group
        position={[32.91, -11.31, 99.86]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[6.64, 107.72, 6.64]}
      >
        <mesh
          geometry={nodes.Text006.geometry}
          material={materials.Black_line}
        />
        <mesh geometry={nodes.Text006_1.geometry} material={materials.metall} />
        <mesh geometry={nodes.Text006_2.geometry} material={materials.blue} />
        <mesh geometry={nodes.Text006_3.geometry} material={materials.grey} />
        <mesh
          geometry={nodes.Text006_4.geometry}
          material={materials.black_line}
        />
        <mesh geometry={nodes.Text006_5.geometry} material={materials.black} />
      </group>

      <Text
        ref={textRef}
        fontSize={34}
        color='#F44336'
        scale={[0.7, 1, 1]}
        position={[-73, -1, 102]}
        font='https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/woff/FiraCode-Light.woff'
      >
        {' '}
      </Text>

      <TerminalConnectingZone
        terminal='CurrentSource+'
        position={new THREE.Vector3(-68, 68, 116)}
      />

      <TerminalConnectingZone
        terminal='CurrentSource-'
        position={new THREE.Vector3(0, 68, 116)}
      />
    </group>
  )
}

export default CurrentSource
