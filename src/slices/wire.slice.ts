import { createSlice } from '@reduxjs/toolkit'

export const wireSlice = createSlice<WireSliceState, WireSlice>({
  name: 'wire',
  initialState: {
    material: 'copper',

    draggableWireIndex: null,

    wires: new Array(4)
      .fill(0)
      .map(() => ({ connectionA: null, connectionB: null })),
  },
  reducers: {
    setWireMaterial: (state, { payload }) => {
      state.material = payload
    },

    setDraggableWire: (state, { payload }) => {
      state.draggableWireIndex = payload
    },

    setWireConnection: (state, { payload }) => {
      const i = state.wires.findIndex(
        (w) =>
          w.connectionA === payload.connectionA &&
          w.connectionB === payload.connectionB,
      )

      if (i !== -1) {
        state.wires[i].connectionA = null
        state.wires[i].connectionB = null
      }

      state.wires[payload.wireIndex].connectionA = payload.connectionA
      state.wires[payload.wireIndex].connectionB = payload.connectionB
    },
  },
})

export const { setWireMaterial, setDraggableWire, setWireConnection } =
  wireSlice.actions
