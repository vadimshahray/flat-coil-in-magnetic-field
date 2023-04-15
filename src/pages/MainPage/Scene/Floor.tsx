import React from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import FloorTexturePath from 'src/assets/floor_texture.jpg'

export const Floor = () => {
  const { map } = useTexture({ map: FloorTexturePath })

  map.repeat.set(20, 20)
  map.wrapS = map.wrapT = THREE.RepeatWrapping

  return (
    <mesh rotation={[0, 0, Math.PI / 2]}>
      <boxGeometry args={[1, 10 * 1024, 10 * 1024]} />

      <meshStandardMaterial map={map} displacementScale={0.2} />
    </mesh>
  )
}
