import { createSlice } from '@reduxjs/toolkit'

export const wireSlice = createSlice<WireSliceState, WireSlice>({
  name: 'wire',
  initialState: {
    material: 'copper',
  },
  reducers: {
    setWireMaterial: (state, { payload }) => {
      state.material = payload
    },
  },
})

export const { setWireMaterial } = wireSlice.actions
