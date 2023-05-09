import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import { Text, useGLTF } from '@react-three/drei'
import { TerminalConnectingZone } from '@components'
import CurrentSourceModelPath from './currentSource.glb'
import { useFrame, ThreeEvent } from '@react-three/fiber'
import FiraCode from 'src/assets/fonts/firacode_light.woff'
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
    Text008: THREE.Mesh
    Text008_1: THREE.Mesh
    Text008_2: THREE.Mesh
    Text008_3: THREE.Mesh
    Text008_4: THREE.Mesh
    Text008_5: THREE.Mesh
    stand015: THREE.Mesh
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
  const textSIRef = useRef<THREE.Mesh>()
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

    if (textSIRef.current) {
      textSIRef.current.visible = isPowerSupplied
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
        position={[7.69, 1.85, 105.19]}
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
        position={[82.59, 0.85, 102.85]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.92, 5.58, 5.58]}
        onClick={handlePowerClick}
        onPointerEnter={setPointerCursor}
        onPointerLeave={setDefaultCursor}
      />
      <group
        position={[14.47, -0.64, 74.87]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5.29, 107.72, 6.64]}
      >
        <mesh
          geometry={nodes.Text008.geometry}
          material={materials.Black_line}
        />
        <mesh geometry={nodes.Text008_1.geometry} material={materials.metall} />
        <mesh geometry={nodes.Text008_2.geometry} material={materials.blue} />
        <mesh geometry={nodes.Text008_3.geometry} material={materials.grey} />
        <mesh
          geometry={nodes.Text008_4.geometry}
          material={materials.black_line}
        />
        <mesh geometry={nodes.Text008_5.geometry} material={materials.black} />
      </group>
      <mesh
        geometry={nodes.stand015.geometry}
        material={materials.black_line}
        position={[7.69, 23.47, 99.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5.29, 107.72, 6.64]}
      />

      <group scale={[0.7, 1, 1]} position={[-49, -4, 102]}>
        <Text
          ref={textRef}
          fontSize={34}
          color='red'
          position={[-3, 0, 0]}
          font={FiraCode}
        >
          {' '}
        </Text>

        <Text
          ref={textSIRef}
          fontSize={24}
          color='red'
          position={[45, -3, 0]}
          font={FiraCode}
        >
          A
        </Text>
      </group>

      <TerminalConnectingZone
        terminal='CurrentSource+'
        color='#832D2E'
        size={16}
        position={[60, 0, 108]}
      />

      <TerminalConnectingZone
        terminal='CurrentSource-'
        color='#4C4C8A'
        size={16}
        position={[34, 0, 108]}
      />
    </group>
  )
}

export default CurrentSource
