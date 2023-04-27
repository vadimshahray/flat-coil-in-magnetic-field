import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import { TerminalConnectingZone } from '@components'
import HelmholtzCoilsModelPath from './HelmholtzCoils.glb'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder062: THREE.Mesh
    Cylinder062_1: THREE.Mesh
    Cylinder062_2: THREE.Mesh
    Cylinder062_3: THREE.Mesh
    Cylinder062_4: THREE.Mesh
    Cylinder062_5: THREE.Mesh
    Cylinder062_6: THREE.Mesh
    Cylinder062_7: THREE.Mesh
  }
  materials: {
    cuprium: THREE.MeshPhysicalMaterial
    blue: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
    grey_plastic: THREE.MeshPhysicalMaterial
    very_grey_plastic: THREE.MeshPhysicalMaterial
    balks: THREE.MeshStandardMaterial
    metallic: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

const terminalPlusPosition = new THREE.Vector3(-71, -154, 170)
const terminalMinusPosition = new THREE.Vector3(51, -154, 170)

const HelmholtzCoils = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(HelmholtzCoilsModelPath) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 189.78, 100.75]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[154.41, 0.32, 154.41]}
      >
        <mesh
          geometry={nodes.Cylinder062.geometry}
          material={materials.cuprium}
        />
        <mesh
          geometry={nodes.Cylinder062_1.geometry}
          material={materials.blue}
        />
        <mesh
          geometry={nodes.Cylinder062_2.geometry}
          material={materials.red}
        />
        <mesh
          geometry={nodes.Cylinder062_3.geometry}
          material={materials.grey_plastic}
        />
        <mesh
          geometry={nodes.Cylinder062_4.geometry}
          material={materials.very_grey_plastic}
        />
        <mesh
          geometry={nodes.Cylinder062_5.geometry}
          material={materials.balks}
        />
        <mesh
          geometry={nodes.Cylinder062_6.geometry}
          material={materials.metallic}
        />
        <mesh
          geometry={nodes.Cylinder062_7.geometry}
          material={materials.Material}
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
