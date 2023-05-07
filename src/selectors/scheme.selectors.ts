import { areConnectionsEqual } from '@utils'
import { SCHEME_CONNECTIONS } from '@constants'

export const selectIsSchemeConnecting = (state: RootState) =>
  state.scheme.connectingWire !== null

export const selectSchemeConnectingWireId = (state: RootState) =>
  state.scheme.connectingWire

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
    )

export const selectAreHelmholtzCoilsConnected = (state: RootState) => {
  const wireA = state.scheme.wires.find((w) =>
    areConnectionsEqual(SCHEME_CONNECTIONS['CurrentSource+HelmholtzCoils+'], w),
  )
  const wireB = state.scheme.wires.find((w) =>
    areConnectionsEqual(SCHEME_CONNECTIONS['CurrentSource-HelmholtzCoils-'], w),
  )

  return !!wireA && !!wireB
}

export const selectIsVoltmeterConnected = (state: RootState) => {
  const wireA = state.scheme.wires.find((w) =>
    areConnectionsEqual(SCHEME_CONNECTIONS['Coil+Voltmeter+'], w),
  )
  const wireB = state.scheme.wires.find((w) =>
    areConnectionsEqual(SCHEME_CONNECTIONS['Coil-Voltmeter-'], w),
  )

  return !!wireA && !!wireB
}

export const selectIsOscilloscopeConnected = (state: RootState) => {
  const wireA = state.scheme.wires.find((w) =>
    areConnectionsEqual(SCHEME_CONNECTIONS['Coil+Oscilloscope+'], w),
  )
  const wireB = state.scheme.wires.find((w) =>
    areConnectionsEqual(SCHEME_CONNECTIONS['Coil-Oscilloscope-'], w),
  )

  return !!wireA && !!wireB
}
