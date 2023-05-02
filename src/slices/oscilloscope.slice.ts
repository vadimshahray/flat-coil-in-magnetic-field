import { createSlice } from '@reduxjs/toolkit'

export const oscilloscopeSlice = createSlice<
  OscilloscopeSliceState,
  OscilloscopeSlice
>({
  name: 'oscilloscope',
  initialState: {
    isPowerSupplied: false,
  },
  reducers: {
    setOscilloscopeIsPowerSupplied: (state, { payload }) => {
      state.isPowerSupplied = payload
    },
  },
})

export const { setOscilloscopeIsPowerSupplied } = oscilloscopeSlice.actions
