import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import EngineModelPath from './engine.glb'
import { useFrame } from '@react-three/fiber'
import { Text, useGLTF } from '@react-three/drei'
import { setDefaultCursor, setPointerCursor } from '@utils'
import { setEngineIsPowerSupplied, setEngineRotationFrequency } from '@slices'
import {
  selectEngineIsPowerSupplied,
  selectEngineRotationFrequency,
} from '@selectors'
import {
  ENGINE_ROTATION_FREQUENCY_MAX,
  ENGINE_ROTATION_FREQUENCY_MIN,
  ENGINE_ROTATION_FREQUENCY_STEP,
} from '@constants'

type GLTFResult = GLTF & {
  nodes: {
    Cube004: THREE.Mesh
    Cube004_1: THREE.Mesh
    Cube004_2: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    button_on: THREE.Mesh
    handle_1: THREE.Mesh
  }
  materials: {
    metallic: THREE.MeshPhysicalMaterial
    black: THREE.MeshPhysicalMaterial
    grey_tabl: THREE.MeshStandardMaterial
    grey_button: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
  }
}

const WoodBlock = React.lazy(() => import('src/models/WoodBlock'))

const powerBtnInitZ = -202.32

const Engine = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(EngineModelPath) as GLTFResult

  const textRef = useRef<Text & { text: string }>()
  const powerBtnRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    const isPowerSupplied = selectEngineIsPowerSupplied(store.getState())

    if (textRef.current) {
      textRef.current.text = isPowerSupplied
        ? selectEngineRotationFrequency(store.getState()).toString()
        : ''
    }

    if (powerBtnRef.current) {
      powerBtnRef.current.position.setZ(
        isPowerSupplied ? powerBtnInitZ + 10 : powerBtnInitZ,
      )
    }
  })

  const handlePowerClick = () => {
    const isPowerSupplied = selectEngineIsPowerSupplied(store.getState())

    store.dispatch(setEngineIsPowerSupplied(!isPowerSupplied))
  }

  const handleFrequencyUpClick = () => {
    const frequency = selectEngineRotationFrequency(store.getState())

    store.dispatch(
      setEngineRotationFrequency(
        Math.min(
          ENGINE_ROTATION_FREQUENCY_MAX,
          frequency + ENGINE_ROTATION_FREQUENCY_STEP,
        ),
      ),
    )
  }

  const handleFrequencyDownClick = () => {
    const frequency = selectEngineRotationFrequency(store.getState())

    store.dispatch(
      setEngineRotationFrequency(
        Math.max(
          ENGINE_ROTATION_FREQUENCY_MIN,
          frequency - ENGINE_ROTATION_FREQUENCY_STEP,
        ),
      ),
    )
  }

  return (
    <group {...props} dispose={null}>
      <group position={[0, 105, 0]}>
        <group scale={0.4} position={[0, 4, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <group
            position={[-169.62, 7.9, 15.07]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[15.06, 13.77, 337.81]}
          >
            <mesh
              geometry={nodes.Cube004.geometry}
              material={materials.metallic}
            />
            <mesh
              geometry={nodes.Cube004_1.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cube004_2.geometry}
              material={materials.grey_tabl}
            />
          </group>

          <mesh
            geometry={nodes.Cube001.geometry}
            material={materials.grey_button}
            position={[300.19, 281.96, -151.04]}
            scale={[3.61, 19.76, 19.78]}
            onClick={handleFrequencyUpClick}
            onPointerEnter={setPointerCursor}
            onPointerLeave={setDefaultCursor}
          />
          <mesh
            geometry={nodes.Cube002.geometry}
            material={materials.grey_button}
            position={[300.19, 212.62, -151.04]}
            rotation={[0, 0, Math.PI]}
            scale={[3.61, 19.76, 19.78]}
            onClick={handleFrequencyDownClick}
            onPointerEnter={setPointerCursor}
            onPointerLeave={setDefaultCursor}
          />
          <mesh
            ref={powerBtnRef}
            geometry={nodes.button_on.geometry}
            material={materials.red}
            position={[255.71, 305.49, -202.32]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[22.49, 10.95, 15.01]}
            onClick={handlePowerClick}
            onPointerEnter={setPointerCursor}
            onPointerLeave={setDefaultCursor}
          />
          <mesh
            geometry={nodes.handle_1.geometry}
            material={materials.metallic}
            position={[255.71, 290.87, 257.96]}
            rotation={[Math.PI / 2, 0.85, 0]}
            scale={[12.97, 34.12, 12.97]}
          />
        </group>

        <Text
          ref={textRef}
          fontSize={47}
          color='#F44336'
          scale={[0.7, 1, 1]}
          position={[0, 100, 120]}
          font='https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/woff/FiraCode-Light.woff'
        >
          {' '}
        </Text>
      </group>

      <WoodBlock args={[170, 105, 220]} position={[0, 52, 0]} />
    </group>
  )
}

export default Engine
