import * as THREE from 'three'
import { useEffect, useMemo } from 'react'
import CameraControls from 'camera-controls'
import { useThree, useFrame } from '@react-three/fiber'
import { useCameraPosition, useDeviceInViewPosition } from '@hooks'

CameraControls.install({ THREE })

export const Camera = () => {
  const { camera, gl } = useThree()

  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement],
  )

  const cameraPosition = useCameraPosition()
  const devicePosition = useDeviceInViewPosition()

  useEffect(() => {
    controls.camera.far = 2000

    controls.minDistance = 360
    controls.maxDistance = 900

    controls.maxPolarAngle = Math.PI / 2
  }, [controls])

  useEffect(() => {
    controls.setLookAt(
      cameraPosition.x,
      cameraPosition.y,
      cameraPosition.z,
      devicePosition.x,
      devicePosition.y,
      devicePosition.z,
      true,
    )
  }, [cameraPosition, devicePosition, controls])

  useFrame((_, delta) => {
    return controls.update(delta)
  })

  return null
}
