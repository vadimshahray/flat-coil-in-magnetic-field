import React from 'react'
import { Wire } from './Wire'
import { useSelector } from 'react-redux'
import { areConnectionsEqual } from '@utils'
import { selectSchemeWires } from '@selectors'
import { ALL_SCHEME_CONNECTIONS } from '@constants'

export const ConnectedWires = () => {
  const wires = useSelector(selectSchemeWires)

  return <>{wires.map(renderConnectedWire)}</>
}

const renderConnectedWire = (wire: Wire) => {
  if (!wire.terminal1 && !wire.terminal2) return null

  const wirePoints = ALL_SCHEME_CONNECTIONS.find((c) =>
    areConnectionsEqual(wire, c),
  )?.points

  if (!wirePoints) return null

  return (
    <Wire key={wire.id} id={wire.id} color={wire.color} points={wirePoints} />
  )
}
