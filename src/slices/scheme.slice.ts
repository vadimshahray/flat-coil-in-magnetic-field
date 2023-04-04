import { createSlice } from '@reduxjs/toolkit'
import { isWireRightConnection } from '@utils'
import { SCHEME_CONNECTIONS } from '@constants'

export const schemeSlice = createSlice<SchemeSliceState, SchemeSlice>({
  name: 'scheme',
  initialState: {
    wires: createWires(4),

    status: 'disassembled',
  },
  reducers: {
    connectWire: (state, { payload }) => {
      const i = state.wires.findIndex((w) => w.id === payload.id)
      if (i === -1) return

      state.wires[i] = {
        ...state.wires[i],
        ...payload,
      }
      state.status = checkSchemeStatus(state.wires)
    },

    disconnectWire: (state, { payload }) => {
      const i = state.wires.findIndex((w) => w.id === payload)
      if (i === -1) return

      state.wires[i] = { ...state.wires[i], terminal1: null, terminal2: null }
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
  connectWire,
  disconnectWire,

  assemblyScheme,
  disassemblyScheme,
} = schemeSlice.actions

function createWires(n: number) {
  return new Array(n).fill(0).map(
    (_, i): Wire => ({
      id: i,
      color: i % 2 ? 'blue' : 'red',
      terminal1: null,
      terminal2: null,
    }),
  )
}

const checkSchemeStatus = (wires: Wire[]): SchemeStatus => {
  if (wires.some((w) => isWireRightConnection(w))) return 'wrong'

  if (wires.some((w) => !w.terminal1 || !w.terminal2)) return 'disassembled'

  return 'assembled'
}
