import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useDispatch } from '@hooks'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import OscilloscopeModelPath from './oscilloscope.glb'
import { setOscilloscopeIsPowerSupplied } from '@slices'
import { OscilloscopeDisplay } from './OscilloscopeDisplay'
import { setDefaultCursor, setPointerCursor } from '@utils'
import { selectOscilloscopeIsPowerSupplied } from '@selectors'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
    Cylinder_1: THREE.Mesh
    power: THREE.Mesh
    Text001: THREE.Mesh
    Text001_1: THREE.Mesh
    Text001_2: THREE.Mesh
    Text001_3: THREE.Mesh
    ['-']: THREE.Mesh
    ['+']: THREE.Mesh
  }
  materials: {
    tabl_background: THREE.MeshStandardMaterial
    Black_line: THREE.MeshStandardMaterial
    power: THREE.MeshStandardMaterial
    Corp: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    metall: THREE.MeshPhysicalMaterial
    very_blue: THREE.MeshStandardMaterial
  }
}

const powerBtnZ = 77.13

const Oscilloscope = (props: JSX.IntrinsicElements['group']) => {
  const dispatch = useDispatch()

  const { nodes, materials } = useGLTF(OscilloscopeModelPath) as GLTFResult

  const powerBtnRef = useRef<THREE.Mesh>(null)

  const isPowerSupplied = useSelector(selectOscilloscopeIsPowerSupplied)

  const handlePowerClick = () => {
    dispatch(setOscilloscopeIsPowerSupplied(!isPowerSupplied))

    if (!powerBtnRef.current) return
    powerBtnRef.current.position.z += isPowerSupplied ? 6 : -6
  }

  useFrame(() => {
    if (!powerBtnRef.current) return

    powerBtnRef.current.position.setZ(powerBtnZ - (isPowerSupplied ? 6 : 0))
  })

  return (
    <group {...props} dispose={null}>
      <group
        position={[87.01, 34.15, 81.41]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-12.81, -6.02, -12.81]}
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
        position={[-92.84, 32, 77.13]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.92, 5.58, 5.58]}
        onClick={handlePowerClick}
        onPointerOver={setPointerCursor}
        onPointerLeave={setDefaultCursor}
      />

      <group
        position={[87.01, 13.75, 74.96]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[6.64, 144.05, 6.64]}
      >
        <mesh
          geometry={nodes.Text001.geometry}
          material={materials.Black_line}
        />
        <mesh geometry={nodes.Text001_1.geometry} material={materials.Corp} />
        <mesh geometry={nodes.Text001_2.geometry} material={materials.blue} />
        <mesh geometry={nodes.Text001_3.geometry} material={materials.metall} />
      </group>

      <mesh
        geometry={nodes['-'].geometry}
        material={materials.very_blue}
        position={[12.23, 32, 77.13]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.92, 5.58, 5.58]}
      />

      <mesh
        geometry={nodes['+'].geometry}
        material={materials.very_blue}
        position={[45.04, 32, 77.13]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.92, 5.58, 5.58]}
      />

      {isPowerSupplied && (
        <OscilloscopeDisplay
          width={200}
          height={120}
          position={[0, 124 / 2 + 54, 74]}
        />
      )}
    </group>
  )
}

export default Oscilloscope
