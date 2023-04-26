import * as THREE from 'three'
import { Line2 } from 'three-stdlib'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import WireIcon from 'src/assets/wire.svg'
import { useThree } from '@react-three/fiber'
import NoWireIcon from 'src/assets/no_wire.svg'
import { CatmullRomLine } from '@react-three/drei'
import { selectSchemeConnectingWireId } from '@selectors'
import React, { useRef, useEffect, useCallback, useState } from 'react'
import { dropSchemeConnectingWire, setSchemeConnectingWireId } from '@slices'

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

    setIsConnecting(!isConnecting)
  }, [isConnecting, id, dispatch])

  const handlePointerEnter = () => {
    const cursorUrl = isConnecting ? NoWireIcon : WireIcon
    document.body.style.cursor = `url(${cursorUrl}), pointer`
  }

  const handlePointerLeave = () => {
    document.body.style.cursor = 'default'
  }

  const handlePointerOut = useCallback(() => {
    if (!isConnecting) return

    dispatch(dropSchemeConnectingWire())

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
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    />
  )
}
