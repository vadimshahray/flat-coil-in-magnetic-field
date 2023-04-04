import * as THREE from 'three'
import { store } from 'src/store'
import { Line2 } from 'three-stdlib'
import { CatmullRomLine } from '@react-three/drei'
import { useThree, ThreeEvent } from '@react-three/fiber'
import { setDraggableWire, setSceneCameraViewPoint } from '@slices'
import React, { useRef, useEffect, useCallback, useState } from 'react'

type Props = {
  id: number
  points: THREE.Vector3[]
  position: THREE.Vector3
  color?: string
  opacity?: number
}

export const Wire = ({ id, position, ...props }: Props) => {
  const { gl } = useThree()

  const ref = useRef<Line2>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startDragPoints, setStartDragPoints] = useState([0, 0])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return

      ref.current?.position.set(
        position.x - (startDragPoints[0] - e.clientX) * 1.5,
        position.y,
        position.z - (startDragPoints[1] - e.clientY) * 1.5,
      )
    },
    [isDragging, startDragPoints, position],
  )

  const handlePointerDown = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      setIsDragging(true)
      setStartDragPoints([e.clientX, e.clientY])

      store.dispatch(setDraggableWire(id))
      store.dispatch(setSceneCameraViewPoint('@SchemeAssembly'))
    },
    [id],
  )

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return

    setIsDragging(false)
    ref.current?.position.set(position.x, position.y, position.z)

    store.dispatch(setDraggableWire(null))
    store.dispatch(setSceneCameraViewPoint())
  }, [position, isDragging])

  useEffect(() => {
    gl.domElement.addEventListener('pointermove', handleMouseMove)
    gl.domElement.addEventListener('pointerup', handlePointerUp)
    gl.domElement.addEventListener('pointerout', handlePointerUp)

    return () => {
      gl.domElement.removeEventListener('pointermove', handleMouseMove)
      gl.domElement.removeEventListener('pointerup', handlePointerUp)
      gl.domElement.removeEventListener('pointerout', handlePointerUp)
    }
  }, [gl.domElement, handleMouseMove, handlePointerUp])

  return (
    <CatmullRomLine
      ref={ref}
      color='#343A40'
      {...props}
      position={position}
      lineWidth={5}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    />
  )
}
