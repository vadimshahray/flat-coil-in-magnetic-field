import { areConnectionsEqual } from '@utils'

export const selectIsSchemeConnecting = (state: RootState) =>
  state.scheme.connectingWire !== null

export const selectSchemeConnectingWireId = (state: RootState) =>
  state.scheme.connectingWire?.id

export const selectSchemeStatus = (state: RootState) => state.scheme.status

export const selectSchemeWires = (state: RootState) => state.scheme.wires

export const selectSchemeWireByConnection =
  (connection: WireConnection) => (state: RootState) =>
    state.scheme.wires.find(
      (w) => w.terminal1 && w.terminal2 && areConnectionsEqual(connection, w),
    )

export const selectHaveTerminalConnection =
  (terminal: Terminal) => (state: RootState) =>
    state.scheme.wires.some(
      (w) => w.terminal1 === terminal || w.terminal2 === terminal,
    ) ||
    state.scheme.connectingWire?.terminal1 === terminal ||
    state.scheme.connectingWire?.terminal2 === terminal
