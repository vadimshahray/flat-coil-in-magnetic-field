import { createSlice } from '@reduxjs/toolkit'

export const wireSlice = createSlice<WireSliceState, WireSlice>({
  name: 'wire',
  initialState: {
    material: 'copper',

    draggableWireIndex: null,
  },
  reducers: {
    setWireMaterial: (state, { payload }) => {
      state.material = payload
    },

    setDraggableWire: (state, { payload }) => {
      state.draggableWireIndex = payload
    },
  },
})

export const { setWireMaterial, setDraggableWire } = wireSlice.actions
