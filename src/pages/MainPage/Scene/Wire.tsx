import * as THREE from 'three'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { setDefaultCursor } from '@utils'
import WireIcon from 'src/assets/wire.svg'
import { useThree } from '@react-three/fiber'
import NoWireIcon from 'src/assets/no_wire.svg'
import { CatmullRomLine } from '@react-three/drei'
import React, { useEffect, useCallback } from 'react'
import { selectSchemeConnectingWireId } from '@selectors'
import { dropSchemeConnectingWire, setSchemeConnectingWireId } from '@slices'

type Props = {
  id: number
  points: [number, number, number][]
  position?: THREE.Vector3
  color?: string
}

export const Wire = ({ id, position, ...props }: Props) => {
  const { gl } = useThree()
  const dispatch = useDispatch()

  const connectingWireId = useSelector(selectSchemeConnectingWireId)
  const isConnecting = connectingWireId === id

  const handleWireClick = useCallback(() => {
    dispatch(
      !isConnecting
        ? setSchemeConnectingWireId(id)
        : dropSchemeConnectingWire(),
    )

    changeWireCursor(!isConnecting)
  }, [isConnecting, id, dispatch])

  const handlePointerEnter = () => {
    changeWireCursor(isConnecting)
  }

  const handlePointerOut = useCallback(() => {
    if (!isConnecting) return

    dispatch(dropSchemeConnectingWire())
  }, [isConnecting, dispatch])

  useEffect(() => {
    gl.domElement.addEventListener('pointerout', handlePointerOut)

    return () => {
      gl.domElement.removeEventListener('pointerout', handlePointerOut)
    }
  }, [gl.domElement, handlePointerOut])

  return (
    <CatmullRomLine
      color='#343A40'
      {...props}
      curveType='chordal'
      position={position}
      lineWidth={5}
      onClick={handleWireClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={setDefaultCursor}
    />
  )
}

const changeWireCursor = (isConnecting: boolean) => {
  const cursorUrl = isConnecting ? NoWireIcon : WireIcon

  document.body.style.cursor = `url(${cursorUrl}), pointer`
}
