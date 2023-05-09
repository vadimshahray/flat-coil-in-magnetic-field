import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useDispatch } from '@hooks'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useGLTF } from '@react-three/drei'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { TerminalConnectingZone } from '@components'
import OscilloscopeModelPath from './oscilloscope.glb'
import {
  setOscilloscopeContrast,
  setOscilloscopeIsPowerSupplied,
} from '@slices'
import { OscilloscopeDisplay } from './OscilloscopeDisplay'
import {
  numberBetween,
  setDefaultCursor,
  setPointerCursor,
  setRotationCursor,
} from '@utils'
import {
  selectOscilloscopeContrast,
  selectOscilloscopeIsPowerSupplied,
} from '@selectors'
import { store } from 'src/store'
import {
  OSCILLOSCOPE_CONTRAST_MAX,
  OSCILLOSCOPE_CONTRAST_MIN,
  OSCILLOSCOPE_CONTRAST_STEP,
} from '@constants'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
    Cylinder_1: THREE.Mesh
    power: THREE.Mesh
    ['-']: THREE.Mesh
    ['+']: THREE.Mesh
    xy: THREE.Mesh
    Text024: THREE.Mesh
    Text024_1: THREE.Mesh
    Text024_2: THREE.Mesh
    Text024_3: THREE.Mesh
    Text024_4: THREE.Mesh
    Text024_5: THREE.Mesh
    Text024_6: THREE.Mesh
  }
  materials: {
    tabl_background: THREE.MeshStandardMaterial
    power: THREE.MeshStandardMaterial
    very_blue: THREE.MeshStandardMaterial
    yellow: THREE.MeshStandardMaterial
    Corp: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    Back: THREE.MeshStandardMaterial
    metall: THREE.MeshPhysicalMaterial
    Black_line: THREE.MeshStandardMaterial
  }
}

const powerBtnZ = 77.13
const contrastRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0)

const Oscilloscope = (props: JSX.IntrinsicElements['group']) => {
  const dispatch = useDispatch()

  const { nodes, materials } = useGLTF(OscilloscopeModelPath) as GLTFResult

  const powerBtnRef = useRef<THREE.Mesh>(null)
  const contrastRef = useRef<THREE.Group>(null)

  const isPowerSupplied = useSelector(selectOscilloscopeIsPowerSupplied)

  useFrame(() => {
    if (!powerBtnRef.current) return

    powerBtnRef.current.position.setZ(powerBtnZ - (isPowerSupplied ? 6 : 0))

    const contrast = selectOscilloscopeContrast(store.getState())
    const angle = Math.PI / 2 - (Math.PI * contrast) / OSCILLOSCOPE_CONTRAST_MAX

    contrastRotation.set(contrastRotation.x, angle, contrastRotation.z)

    contrastRef.current?.setRotationFromEuler(contrastRotation)
  })

  const handlePowerClick = () => {
    dispatch(setOscilloscopeIsPowerSupplied(!isPowerSupplied))

    if (!powerBtnRef.current) return
    powerBtnRef.current.position.z += isPowerSupplied ? 6 : -6
  }

  const handleWheel = (e: ThreeEvent<WheelEvent>) => {
    const contrast = selectOscilloscopeContrast(store.getState())

    const newContrast =
      contrast + Math.sign(-e.deltaY) * OSCILLOSCOPE_CONTRAST_STEP

    const newRoundedContrast =
      Math.round((newContrast + Number.EPSILON) * 100) / 100

    store.dispatch(
      setOscilloscopeContrast(
        numberBetween(
          newRoundedContrast,
          OSCILLOSCOPE_CONTRAST_MIN,
          OSCILLOSCOPE_CONTRAST_MAX,
        ),
      ),
    )
  }

  return (
    <group {...props} dispose={null}>
      <group position={[0, -110, 0]}>
        <group
          ref={contrastRef}
          position={[63.35, 34.15, 81.41]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-12.81, -6.02, -12.81]}
          onPointerEnter={setRotationCursor}
          onPointerLeave={setDefaultCursor}
          onWheel={handleWheel}
        >
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={materials.tabl_background}
          />
          <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Black_line}
          />
        </group>
        <mesh
          ref={powerBtnRef}
          geometry={nodes.power.geometry}
          material={materials.power}
          position={[-76.17, 32, 76.53]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={3.92}
          onClick={handlePowerClick}
          onPointerOver={setPointerCursor}
          onPointerLeave={setDefaultCursor}
        />
        <mesh
          geometry={nodes['-'].geometry}
          material={materials.very_blue}
          position={[14.54, 32, 76.53]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={3.92}
        />
        <mesh
          geometry={nodes['+'].geometry}
          material={materials.very_blue}
          position={[33.76, 32, 76.53]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={3.92}
        />
        <mesh
          geometry={nodes.xy.geometry}
          material={materials.yellow}
          position={[-4.84, 32, 76.53]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={3.92}
        />
        <group
          position={[1.43, 146.79, 74.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[5.29, 144.11, 6.64]}
        >
          <mesh
            geometry={nodes.Text024.geometry}
            material={materials.Black_line}
          />
          <mesh geometry={nodes.Text024_1.geometry} material={materials.Corp} />
          <mesh geometry={nodes.Text024_2.geometry} material={materials.blue} />
          <mesh geometry={nodes.Text024_3.geometry} material={materials.Back} />
          <mesh
            geometry={nodes.Text024_4.geometry}
            material={materials.very_blue}
          />
          <mesh
            geometry={nodes.Text024_5.geometry}
            material={materials.metall}
          />
          <mesh
            geometry={nodes.Text024_6.geometry}
            material={materials.Black_line}
          />
        </group>

        <TerminalConnectingZone
          terminal='Oscilloscope+'
          color='black'
          size={16}
          position={[-28, 32, 83.5]}
        />

        <TerminalConnectingZone
          terminal='Oscilloscope-'
          color='black'
          size={16}
          position={[-56, 32, 83.5]}
        />

        <OscilloscopeDisplay
          width={160}
          height={120}
          visible={isPowerSupplied}
          position={[0, 124 / 2 + 54, 74]}
        />
      </group>
    </group>
  )
}

export default Oscilloscope
