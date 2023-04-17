import * as THREE from 'three'
import { useEffect, useMemo } from 'react'
import { useCameraViewPoint } from '@hooks'
import CameraControls from 'camera-controls'
import { useThree, useFrame } from '@react-three/fiber'

CameraControls.install({ THREE })

export const Camera = () => {
  const { camera, gl } = useThree()

  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement],
  )

  const [targetPosition, cameraPosition] = useCameraViewPoint()

  useEffect(() => {
    controls.camera.far = 20000

    controls.mouseButtons = {
      right: CameraControls.ACTION.ROTATE,
      left: CameraControls.ACTION.NONE,
      middle: CameraControls.ACTION.DOLLY,
      wheel: CameraControls.ACTION.DOLLY,
    }

    controls.minDistance = 360
    controls.maxDistance = 4000

    controls.maxPolarAngle = Math.PI / 2
  }, [controls])

  useEffect(() => {
    controls.setLookAt(
      cameraPosition.x,
      cameraPosition.y,
      cameraPosition.z,
      targetPosition.x,
      targetPosition.y,
      targetPosition.z,
      true,
    )
  }, [cameraPosition, targetPosition, controls])

  useFrame((_, delta) => {
    return controls.update(delta)
  })

  return null
}
