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
    Cylinder_1: THREE.Mesh
    Cylinder_2: THREE.Mesh
    Cylinder_3: THREE.Mesh
    green_button_1: THREE.Mesh
    green_button_2: THREE.Mesh
    button_on: THREE.Mesh
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

const powerBtnInitX = 266.74

const Engine = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(EngineModelPath) as GLTFResult

  const textRef = useRef<Text & { text: string }>()
  const textSIRef = useRef<THREE.Mesh>()
  const powerBtnRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    const isPowerSupplied = selectEngineIsPowerSupplied(store.getState())

    if (textRef.current) {
      textRef.current.text = isPowerSupplied
        ? selectEngineRotationFrequency(store.getState()).toString()
        : ''
    }

    if (textSIRef.current) {
      textSIRef.current.visible = isPowerSupplied
    }

    if (powerBtnRef.current) {
      powerBtnRef.current.position.setX(
        isPowerSupplied ? powerBtnInitX - 10 : powerBtnInitX,
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
      <group position={[-10, 107, 3]}>
        <group scale={0.4} position={[0, 4, 0]}>
          <group
            position={[49.94, 220.64, -22.82]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[191.14, 328.3, 191.14]}
          >
            <mesh
              geometry={nodes.Cylinder_1.geometry}
              material={materials.metallic}
            />
            <mesh
              geometry={nodes.Cylinder_2.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cylinder_3.geometry}
              material={materials.grey_tabl}
            />
          </group>
          <mesh
            geometry={nodes.green_button_1.geometry}
            material={materials.grey_button}
            position={[215.46, 274.68, 295.22]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[3.61, 19.76, 19.78]}
            onClick={handleFrequencyUpClick}
            onPointerEnter={setPointerCursor}
            onPointerLeave={setDefaultCursor}
          />
          <mesh
            geometry={nodes.green_button_2.geometry}
            material={materials.grey_button}
            position={[215.46, 205.34, 295.22]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={[3.61, 19.76, 19.78]}
            onClick={handleFrequencyDownClick}
            onPointerEnter={setPointerCursor}
            onPointerLeave={setDefaultCursor}
          />
          <mesh
            ref={powerBtnRef}
            geometry={nodes.button_on.geometry}
            material={materials.red}
            position={[266.74, 298.21, 250.74]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[22.49, 10.95, 15.01]}
            onClick={handlePowerClick}
            onPointerEnter={setPointerCursor}
            onPointerLeave={setDefaultCursor}
          />
        </group>

        <group
          scale={[0.7, 1, 1]}
          position={[24, 98, 118]}>
        <Text
          ref={textRef}
          fontSize={47}
          color='red'
          font='https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/woff/FiraCode-Light.woff'
        >
          {' '}
        </Text>

        <Text
          ref={textSIRef}
          fontSize={20}
          color='red'
          position={[44, -8, 0]}
          font='https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/woff/FiraCode-Light.woff'
        >
          Hz
          </Text>
        </group>
      </group>

      <WoodBlock args={[280, 107, 220]} position={[8, 52, 0]} />
    </group>
  )
}

export default Engine
