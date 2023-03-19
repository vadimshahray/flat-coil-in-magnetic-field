import * as THREE from 'three'
import { useMemo } from 'react'
import CameraControls from 'camera-controls'
import { useThree, useFrame } from '@react-three/fiber'

CameraControls.install({ THREE })

export const Camera = () => {
  const { camera, gl } = useThree()

  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement],
  )
  camera.position.set(100, 100, 0)

  useFrame((_, delta) => {
    return controls.update(delta)
  })

  return null
}
