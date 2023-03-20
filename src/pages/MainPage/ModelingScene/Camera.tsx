import * as THREE from 'three'
import { useMemo } from 'react'
import CameraControls from 'camera-controls'
import { useThree, useFrame } from '@react-three/fiber'
import { CAMERA_DEFAULT_POSITION } from '@constants'

CameraControls.install({ THREE })

export const Camera = () => {
  const { camera, gl } = useThree()

  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement],
  )

  camera.position.set(
    CAMERA_DEFAULT_POSITION.x,
    CAMERA_DEFAULT_POSITION.y,
    CAMERA_DEFAULT_POSITION.z,
  )

  useFrame((_, delta) => {
    return controls.update(delta)
  })

  return null
}
