import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import { TerminalConnectingZone } from '@components'
import HelmholtzCoilsModelPath from './HelmholtzCoils.glb'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder015: THREE.Mesh
    Cylinder015_1: THREE.Mesh
    Cylinder015_2: THREE.Mesh
    Cylinder015_3: THREE.Mesh
    Cylinder015_4: THREE.Mesh
    Cylinder015_5: THREE.Mesh
    Cylinder015_6: THREE.Mesh
  }
  materials: {
    metallic: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    grey_plastic: THREE.MeshPhysicalMaterial
    cuprium: THREE.MeshPhysicalMaterial
    very_grey_plastic: THREE.MeshPhysicalMaterial
    Material: THREE.MeshStandardMaterial
    balks: THREE.MeshStandardMaterial
  }
}

const terminalPlusPosition = new THREE.Vector3(-71, -154, 170)
const terminalMinusPosition = new THREE.Vector3(51, -154, 170)

const HelmholtzCoils = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(HelmholtzCoilsModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        position={[-97.14, 43.72, -119.73]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.91, 0.86, 1.91]}
      >
        <mesh
          geometry={nodes.Cylinder015.geometry}
          material={materials.metallic}
        />
        <mesh
          geometry={nodes.Cylinder015_1.geometry}
          material={materials.blue}
        />
        <mesh
          geometry={nodes.Cylinder015_2.geometry}
          material={materials.grey_plastic}
        />
        <mesh
          geometry={nodes.Cylinder015_3.geometry}
          material={materials.cuprium}
        />
        <mesh
          geometry={nodes.Cylinder015_4.geometry}
          material={materials.very_grey_plastic}
        />
        <mesh
          geometry={nodes.Cylinder015_5.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cylinder015_6.geometry}
          material={materials.balks}
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
