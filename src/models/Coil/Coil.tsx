import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import CoilModelPath from './coil.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { TerminalConnectingZone } from '@components'
import { selectEngineIsPowerSupplied } from '@selectors'

type GLTFResult = GLTF & {
  nodes: {
    handle: THREE.Mesh
    axis: THREE.Mesh
    Cube024: THREE.Mesh
    Cube024_1: THREE.Mesh
    Cube024_2: THREE.Mesh
    Cube013: THREE.Mesh
    Cube013_1: THREE.Mesh
    Cube013_2: THREE.Mesh
    Cube013_3: THREE.Mesh
    Cube013_4: THREE.Mesh
  }
  materials: {
    metallic: THREE.MeshStandardMaterial
    cu: THREE.MeshPhysicalMaterial
    grey_plastic: THREE.MeshPhysicalMaterial
    au: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    very_grey_plastic: THREE.MeshStandardMaterial
  }
}

const WoodBlock = React.lazy(() => import('src/models/WoodBlock'))

const Coil = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(CoilModelPath) as GLTFResult

  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    const state = store.getState()

    if (!selectEngineIsPowerSupplied(state)) return

    ref.current?.rotateZ(0.3)
  })

  return (
    <group {...props} dispose={null}>
      <group position={[0, 70, 0]}>
        <group scale={[4.6, 4, 4]}>
          <mesh
            geometry={nodes.handle.geometry}
            material={materials.metallic}
            position={[29.98, 32.56, -0.21]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.83, 21.06, 0.83]}
          />
          <mesh
            geometry={nodes.axis.geometry}
            material={materials.metallic}
            position={[29.98, 32.56, -0.21]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.83, 4.06, 0.83]}
          />
          <group
            ref={ref}
            position={[-0.26, 32.57, -0.21]}
            rotation={[Math.PI, -Math.PI / 2, 0]}
            scale={[-1.33, -8.07, -10.76]}
          >
            <mesh geometry={nodes.Cube024.geometry} material={materials.cu} />
            <mesh
              geometry={nodes.Cube024_1.geometry}
              material={materials.grey_plastic}
            />
            <mesh
              geometry={nodes.Cube024_2.geometry}
              material={nodes.Cube024_2.material}
            />
          </group>
          <group
            position={[-3.67, 19.62, -0.21]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[5.41, 1.2, 3.16]}
          >
            <mesh
              geometry={nodes.Cube013.geometry}
              material={materials.grey_plastic}
            />
            <mesh geometry={nodes.Cube013_1.geometry} material={materials.au} />
            <mesh
              geometry={nodes.Cube013_2.geometry}
              material={materials.metallic}
            />
            <mesh
              geometry={nodes.Cube013_3.geometry}
              material={materials.blue}
            />
            <mesh
              geometry={nodes.Cube013_4.geometry}
              material={materials.very_grey_plastic}
            />
          </group>
        </group>

        <TerminalConnectingZone
          terminal='Coil+'
          color='#832D2E'
          rotation={[0, Math.PI / 2, 0]}
          position={[137, 96, 0]}
        />

        <TerminalConnectingZone
          terminal='Coil-'
          color='#4C4C8A'
          rotation={[0, -Math.PI / 2, 0]}
          position={[-137, 96, 0]}
        />
      </group>

      <WoodBlock args={[50, 70, 120]} position={[-135, 35, 0]} />

      <WoodBlock args={[50, 70, 120]} position={[135, 35, 0]} />
    </group>
  )
}

export default Coil
