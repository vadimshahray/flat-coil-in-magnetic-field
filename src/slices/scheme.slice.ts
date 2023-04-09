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
      state.connectingWire = {
        id: payload,
      }
    },

    dropSchemeConnectingWire: (state) => {
      state.connectingWire = null
    },

    connectWire: (state, { payload }) => {
      if (state.connectingWire === null) return

      if (!state.connectingWire.terminal1)
        state.connectingWire.terminal1 = payload
      else if (!state.connectingWire.terminal2)
        state.connectingWire.terminal2 = payload

      if (!state.connectingWire.terminal1 || !state.connectingWire.terminal2)
        return

      const i = state.wires.findIndex((w) => w.id === state.connectingWire?.id)
      if (i === -1) return

      state.wires[i] = {
        ...state.wires[i],
        ...state.connectingWire,
      }

      state.connectingWire = null

      state.status = checkSchemeStatus(state.wires)
    },

    disconnectWire: (state, { payload }) => {
      const i = state.wires.findIndex(
        (w) => w.terminal1 === payload || w.terminal2 === payload,
      )

      if (i === -1) {
        if (!state.connectingWire) return

        if (state.connectingWire.terminal1 === payload)
          state.connectingWire.terminal1 = undefined
        if (state.connectingWire.terminal2 === payload)
          state.connectingWire.terminal2 = undefined

        return
      }

      if (state.wires[i].terminal1 === payload) state.wires[i].terminal1 = null
      if (state.wires[i].terminal2 === payload) state.wires[i].terminal2 = null

      state.status = checkSchemeStatus(state.wires)
    },

    assemblyScheme: (state) => {
      state.wires[0] = {
        ...state.wires[0],
        ...SCHEME_CONNECTIONS['Coil+Voltmeter+'],
      }
      state.wires[1] = {
        ...state.wires[1],
        ...SCHEME_CONNECTIONS['Coil-Voltmeter-'],
      }
      state.wires[2] = {
        ...state.wires[2],
        ...SCHEME_CONNECTIONS['AmperageGenerator+HelmholtzCoils+'],
      }
      state.wires[3] = {
        ...state.wires[3],
        ...SCHEME_CONNECTIONS['AmperageGenerator-HelmholtzCoils-'],
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
      color: i % 2 ? '#4C4C8A' : '#832D2E',
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
