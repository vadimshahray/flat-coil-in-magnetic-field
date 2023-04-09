import * as THREE from 'three'
import { Line2 } from 'three-stdlib'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useThree } from '@react-three/fiber'
import { CatmullRomLine } from '@react-three/drei'
import { selectSchemeConnectingWireId } from '@selectors'
import React, { useRef, useEffect, useCallback, useState } from 'react'
import {
  setSceneCameraViewPoint,
  dropSchemeConnectingWire,
  setSchemeConnectingWireId,
} from '@slices'

type Props = {
  id: number
  points: THREE.Vector3[]
  position?: THREE.Vector3
  color?: string
  opacity?: number
}

export const Wire = ({ id, position, ...props }: Props) => {
  const { gl } = useThree()
  const dispatch = useDispatch()

  const ref = useRef<Line2>(null)

  const connectingWireId = useSelector(selectSchemeConnectingWireId)
  const [isConnecting, setIsConnecting] = useState(false)

  const handleWireClick = useCallback(() => {
    dispatch(
      !isConnecting
        ? setSchemeConnectingWireId(id)
        : dropSchemeConnectingWire(),
    )
    dispatch(
      setSceneCameraViewPoint(!isConnecting ? '@SchemeAssembly' : undefined),
    )

    setIsConnecting(!isConnecting)
  }, [isConnecting, id, dispatch])

  const handlePointerOut = useCallback(() => {
    if (!isConnecting) return

    dispatch(dropSchemeConnectingWire())
    dispatch(setSceneCameraViewPoint())

    setIsConnecting(false)
  }, [isConnecting, dispatch])

  useEffect(() => {
    if (connectingWireId === id) return

    setIsConnecting(false)
  }, [id, connectingWireId])

  useEffect(() => {
    gl.domElement.addEventListener('pointerout', handlePointerOut)

    return () => {
      gl.domElement.removeEventListener('pointerout', handlePointerOut)
    }
  }, [gl.domElement, handlePointerOut])

  return (
    <CatmullRomLine
      ref={ref}
      color='#343A40'
      {...props}
      position={position}
      lineWidth={5}
      onClick={handleWireClick}
    />
  )
}
