import { areConnectionsEqual } from '@utils'

export const selectSchemeStatus = (state: RootState) => state.scheme.status

export const selectSchemeWires = (state: RootState) => state.scheme.wires

export const selectSchemeWireByConnection =
  (connection: WireConnection) => (state: RootState) =>
    state.scheme.wires.find(
      (w) =>
        w.terminal1 &&
        w.terminal2 &&
        areConnectionsEqual(connection, {
          terminal1: w.terminal1,
          terminal2: w.terminal2,
        }),
    )
