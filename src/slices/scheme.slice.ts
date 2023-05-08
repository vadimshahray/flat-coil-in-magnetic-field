import { createSlice } from '@reduxjs/toolkit'
import { isWireRightConnection } from '@utils'
import { SCHEME_CONNECTIONS } from '@constants'

export const schemeSlice = createSlice<SchemeSliceState, SchemeSlice>({
  name: 'scheme',
  initialState: {
    wires: createWires(4),

    connectingWire: null,

    status: 'disassembled',
  },
  reducers: {
    setSchemeConnectingWireId: (state, { payload }) => {
      state.connectingWire = payload
    },

    dropSchemeConnectingWire: (state) => {
      state.connectingWire = null
    },

    connectWire: (state, { payload }) => {
      const i = state.wires.findIndex((w) => w.id === state.connectingWire)
      if (i === -1) return

      if (!state.wires[i].terminal1) state.wires[i].terminal1 = payload
      else if (!state.wires[i].terminal2) state.wires[i].terminal2 = payload

      if (state.wires[i].terminal1 && state.wires[i].terminal2) {
        state.connectingWire = null
      }

      state.status = checkSchemeStatus(state.wires)
    },

    disconnectWire: (state, { payload }) => {
      const i = state.wires.findIndex(
        (w) => w.terminal1 === payload || w.terminal2 === payload,
      )

      if (i === -1) return

      if (state.wires[i].terminal1 === payload) state.wires[i].terminal1 = null
      if (state.wires[i].terminal2 === payload) state.wires[i].terminal2 = null

      if (!state.wires[i].terminal1 && !state.wires[i].terminal2) {
        state.connectingWire = null
      }

      state.status = checkSchemeStatus(state.wires)
    },

    assemblyScheme: (state) => {
      state.wires[0] = {
        ...state.wires[0],
        ...SCHEME_CONNECTIONS['Coil+Oscilloscope+'],
      }
      state.wires[1] = {
        ...state.wires[1],
        ...SCHEME_CONNECTIONS['Coil-Oscilloscope-'],
      }
      state.wires[2] = {
        ...state.wires[2],
        ...SCHEME_CONNECTIONS['CurrentSource+HelmholtzCoils+'],
      }
      state.wires[3] = {
        ...state.wires[3],
        ...SCHEME_CONNECTIONS['CurrentSource-HelmholtzCoils-'],
      }

      state.status = 'assembled'
    },

    disassemblyScheme: (state) => {
      state.wires.forEach((w) => {
        w.terminal1 = null
        w.terminal2 = null
      })

      state.status = 'disassembled'
    },
  },
})

export const {
  setSchemeConnectingWireId,
  dropSchemeConnectingWire,

  connectWire,
  disconnectWire,

  assemblyScheme,
  disassemblyScheme,
} = schemeSlice.actions

function createWires(n: number) {
  return new Array(n).fill(0).map(
    (_, i): Wire => ({
      id: i,
      color: i % 2 ? '#3C3C6E' : '#77292A',
      terminal1: null,
      terminal2: null,
    }),
  )
}

const checkSchemeStatus = (wires: Wire[]): SchemeStatus => {
  if (
    wires.some((w) => w.terminal1 && w.terminal2 && !isWireRightConnection(w))
  )
    return 'wrong'

  if (wires.some((w) => !w.terminal1 || !w.terminal2)) return 'disassembled'

  return 'assembled'
}
