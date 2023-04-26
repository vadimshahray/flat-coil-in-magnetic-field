import { useDispatch } from '@hooks'
import { Box } from '@react-three/drei'
import { useSelector } from 'react-redux'
import React, { useCallback } from 'react'
import { connectWire, disconnectWire } from '@slices'
import ConnectWireIcon from 'src/assets/connect_wire.svg'
import DisconnectWireIcon from 'src/assets/disconnect_wire.svg'
import {
  selectIsSchemeConnecting,
  selectHaveTerminalConnection,
} from '@selectors'

type Props = {
  terminal: Terminal
  size?: number
  position: THREE.Vector3
}

export const TerminalConnectingZone = ({
  terminal,
  size = 30,
  ...props
}: Props) => {
  const dispatch = useDispatch()

  const isSchemeConnecting = useSelector(selectIsSchemeConnecting)
  const haveConnection = useSelector(selectHaveTerminalConnection(terminal))

  const handleClick = useCallback(() => {
    if (!isSchemeConnecting) return

    if (haveConnection) {
      dispatch(disconnectWire(terminal))
      return
    }

    dispatch(connectWire(terminal))
  }, [isSchemeConnecting, haveConnection, terminal, dispatch])

  const handlePointerEnter = () => {
    if (!isSchemeConnecting) return

    const cursorUrl = haveConnection ? DisconnectWireIcon : ConnectWireIcon

    document.body.style.cursor = `url(${cursorUrl}), pointer`
  }

  const handlePointerLeave = () => {
    document.body.style.cursor = 'default'
  }

  return (
    <Box
      args={[size, size, size]}
      {...props}
      visible={false}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    />
  )
}
