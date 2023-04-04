import { SCHEME_CONNECTIONS } from '@constants'

export const areConnectionsEqual = (a: WireConnection, b: WireConnection) =>
  (a.terminal1 === b.terminal1 && a.terminal2 === b.terminal2) ||
  (a.terminal1 === b.terminal2 && a.terminal2 === b.terminal1)

export const isWireRightConnection = (wire: Wire) => {
  return Object.values(SCHEME_CONNECTIONS).some(
    (c) =>
      wire.terminal1 &&
      wire.terminal2 &&
      areConnectionsEqual(c, {
        terminal1: wire.terminal1,
        terminal2: wire.terminal2,
      }),
  )
}
