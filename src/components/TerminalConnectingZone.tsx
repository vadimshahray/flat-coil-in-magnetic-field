import { useDispatch } from '@hooks'
import { Box } from '@react-three/drei'
import { useSelector } from 'react-redux'
import { setDefaultCursor } from '@utils'
import { ThreeEvent } from '@react-three/fiber'
import { connectWire, disconnectWire } from '@slices'
import React, { useCallback, useEffect } from 'react'
import ConnectWireIcon from 'src/assets/connect_wire.svg'
import DisconnectWireIcon from 'src/assets/disconnect_wire.svg'
import {
  selectIsSchemeConnecting,
  selectHaveTerminalConnection,
} from '@selectors'

const Terminal = React.lazy(() => import('src/models/Terminal'))

type Props = {
  terminal: Terminal
  color: string
  size?: number
} & JSX.IntrinsicElements['group']

export const TerminalConnectingZone = ({
  terminal,
  color,
  size = 30,
  ...props
}: Props) => {
  const dispatch = useDispatch()

  const isSchemeConnecting = useSelector(selectIsSchemeConnecting)
  const haveConnection = useSelector(selectHaveTerminalConnection(terminal))

  const handleClick = useCallback(
    (e: ThreeEvent<MouseEvent>) => {
      if (!isSchemeConnecting) return

      e.stopPropagation()

      dispatch(
        !haveConnection ? connectWire(terminal) : disconnectWire(terminal),
      )

      changeTerminalCursor(!haveConnection)
    },
    [isSchemeConnecting, haveConnection, terminal, dispatch],
  )

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    if (!isSchemeConnecting) return

    e.stopPropagation()

    changeTerminalCursor(haveConnection)
  }

  useEffect(() => {
    if (!isSchemeConnecting) {
      setDefaultCursor()
    }
  })

  return (
    <group {...props}>
      <Box
        args={[size, size, size]}
        visible={false}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={setDefaultCursor}
      />

      <Terminal color={color} position={[0, 0, -size / 2 + 6]} />
    </group>
  )
}

const changeTerminalCursor = (haveConnection: boolean) => {
  const cursorUrl = haveConnection ? DisconnectWireIcon : ConnectWireIcon

  document.body.style.cursor = `url(${cursorUrl}), pointer`
}
