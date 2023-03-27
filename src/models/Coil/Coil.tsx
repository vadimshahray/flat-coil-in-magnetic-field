import * as THREE from 'three'
import { store } from 'src/store'
import { GLTF } from 'three-stdlib'
import React, { useRef } from 'react'
import CoilModelPath from './coil.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { selectModelingStatus, selectMotorRotationFrequency } from '@selectors'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

const Coil = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(CoilModelPath) as GLTFResult

  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!ref.current) return

    if (selectModelingStatus(store.getState()) === 'idle')
      return (ref.current.rotation.x = Math.PI / 2)

    if (selectModelingStatus(store.getState()) !== 'started') return

    ref.current.rotateX(selectMotorRotationFrequency(store.getState()) / 10)
  })

  return (
    <group {...props} dispose={null} scale={110}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={[0.98, 0.44, 0.19]}
      />

      <mesh
        ref={ref}
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, 0.27, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.69, 0.23, 0.01]}
      />
    </group>
  )
}

export default Coil
