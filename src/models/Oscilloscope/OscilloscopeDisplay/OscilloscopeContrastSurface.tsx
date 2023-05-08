import * as THREE from 'three'
import { store } from 'src/store'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { selectOscilloscopeContrast } from '@selectors'

type Props = {
  width: number
  height: number
}

export const OscilloscopeContrastSurface = ({ width, height }: Props) => {
  const materialRef = useRef<THREE.MeshBasicMaterial | null>(null)

  useFrame(() => {
    if (!materialRef.current) return

    materialRef.current.opacity =
      1 - selectOscilloscopeContrast(store.getState())
  })

  return (
    <mesh>
      <boxGeometry args={[width, height, 3]} />
      <meshBasicMaterial ref={materialRef} color='black' transparent />
    </mesh>
  )
}
