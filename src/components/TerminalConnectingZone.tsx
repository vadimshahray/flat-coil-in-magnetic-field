import { useDispatch } from '@hooks'
import { Box } from '@react-three/drei'
import { useSelector } from 'react-redux'
import { setDefaultCursor } from '@utils'
import { connectWire, disconnectWire } from '@slices'
import React, { useCallback, useEffect } from 'react'
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

    dispatch(!haveConnection ? connectWire(terminal) : disconnectWire(terminal))

    changeTerminalCursor(!haveConnection)
  }, [isSchemeConnecting, haveConnection, terminal, dispatch])

  const handlePointerEnter = () => {
    if (!isSchemeConnecting) return

    changeTerminalCursor(haveConnection)
  }

  useEffect(() => {
    if (!isSchemeConnecting) {
      setDefaultCursor()
    }
  })

  return (
    <Box
      args={[size, size, size]}
      {...props}
      visible={false}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={setDefaultCursor}
    />
  )
}

const changeTerminalCursor = (haveConnection: boolean) => {
  const cursorUrl = haveConnection ? DisconnectWireIcon : ConnectWireIcon

  document.body.style.cursor = `url(${cursorUrl}), pointer`
}
