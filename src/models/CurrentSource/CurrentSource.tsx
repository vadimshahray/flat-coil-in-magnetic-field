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

const powerBtnPositionZ = 106.5

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
      <group position={[0, 6, 0]}>
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
          ref={amperageSwitchRef}
          position={[68.25, 145.31, 110.7]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[-17.51, -8.23, -17.51]}
          onPointerEnter={setRotationCursor}
          onPointerLeave={setDefaultCursor}
          onWheel={handleWheel}
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
          ref={powerBtnRef}
          geometry={nodes.power.geometry}
          material={materials.power}
          position={[68.25, 58.92, 106.5]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[3.92, 5.58, 5.58]}
          onClick={handlePowerClick}
          onPointerEnter={setPointerCursor}
          onPointerLeave={setDefaultCursor}
        />

        <Text
          ref={textRef}
          fontSize={34}
          color='#F44336'
          scale={[0.7, 1, 1]}
          position={[-33, 152, 102]}
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
    </group>
  )
}

export default CurrentSource
