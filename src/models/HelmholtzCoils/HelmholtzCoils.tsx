import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import { TerminalConnectingZone } from '@components'
import HelmholtzCoilsModelPath from './HelmholtzCoils.glb'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder018: THREE.Mesh
    Cylinder018_1: THREE.Mesh
    Cylinder018_2: THREE.Mesh
    Cylinder018_3: THREE.Mesh
    Cylinder018_4: THREE.Mesh
    Cylinder018_5: THREE.Mesh
  }
  materials: {
    blue: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
    grey_plastic: THREE.MeshPhysicalMaterial
    cuprium: THREE.MeshPhysicalMaterial
    very_grey_plastic: THREE.MeshPhysicalMaterial
    black_plastic: THREE.MeshStandardMaterial
  }
}

const terminalPlusPosition = new THREE.Vector3(51, -154, 170)
const terminalMinusPosition = new THREE.Vector3(-71, -154, 170)

const HelmholtzCoils = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(HelmholtzCoilsModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        position={[52.54, -164.24, -157.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 0.25, 0.04]}
      >
        <mesh geometry={nodes.Cylinder018.geometry} material={materials.blue} />
        <mesh
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.red}
        />
        <mesh
          geometry={nodes.Cylinder018_2.geometry}
          material={materials.grey_plastic}
        />
        <mesh
          geometry={nodes.Cylinder018_3.geometry}
          material={materials.cuprium}
        />
        <mesh
          geometry={nodes.Cylinder018_4.geometry}
          material={materials.very_grey_plastic}
        />
        <mesh
          geometry={nodes.Cylinder018_5.geometry}
          material={materials.black_plastic}
        />
      </group>

      <TerminalConnectingZone
        terminal='HelmholtzCoils+'
        position={terminalPlusPosition}
      />

      <TerminalConnectingZone
        terminal='HelmholtzCoils-'
        position={terminalMinusPosition}
      />
    </group>
  )
}

export default HelmholtzCoils
