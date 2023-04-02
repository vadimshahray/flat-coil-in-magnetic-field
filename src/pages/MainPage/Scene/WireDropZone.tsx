import * as THREE from 'three'
import { Line2 } from 'three-stdlib'
import { useSelector } from 'react-redux'
import { selectDraggableWireIndex } from '@selectors'
import { Box, CatmullRomLine } from '@react-three/drei'
import React, { useCallback, useRef, useState, useEffect } from 'react'

type Props = {
  placeholderWire: {
    isVisible: boolean
    points: THREE.Vector3[]
  }
  dropZone: {
    width: number
    height: number
    rotation: THREE.Euler
    position: THREE.Vector3
  }
  onWireDrop: (wireIndex: number) => void
} & JSX.IntrinsicElements['group']

export const WireDropZone = ({
  placeholderWire,
  dropZone,
  onWireDrop,
  ...props
}: Props) => {
  const ref = useRef<Line2>(null)

  const draggableWireIndex = useSelector(selectDraggableWireIndex)
  const [lastDraggableWireIndex, setLastDraggableWireIndex] =
    useState(draggableWireIndex)

  const handleMouseMove = useCallback(() => {
    if (!ref.current) return

    ref.current.visible = draggableWireIndex !== null

    if (draggableWireIndex !== null) {
      setLastDraggableWireIndex(draggableWireIndex)
    }
  }, [draggableWireIndex])

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return

    ref.current.visible = false
  }, [])

  const handleMouseUp = useCallback(() => {
    if (lastDraggableWireIndex === null) return

    onWireDrop(lastDraggableWireIndex)
    setLastDraggableWireIndex(null)
  }, [lastDraggableWireIndex, onWireDrop])

  useEffect(() => {
    if (!ref.current) return

    ref.current.visible = false
  })

  return (
    <group {...props}>
      <CatmullRomLine
        ref={ref}
        points={placeholderWire.points}
        visible={placeholderWire.isVisible}
        lineWidth={5}
        color='#7D8C9A'
      />

      <Box
        args={[dropZone.width, dropZone.height]}
        position={dropZone.position}
        rotation={dropZone.rotation}
        visible={false}
        onPointerUp={handleMouseUp}
        onPointerMove={handleMouseMove}
        onPointerLeave={handleMouseLeave}
      />
    </group>
  )
}
