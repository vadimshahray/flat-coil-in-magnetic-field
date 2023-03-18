import { createSlice } from '@reduxjs/toolkit'

export const voltmeterSlice = createSlice<VoltmeterSliceState, VoltmeterSlice>({
  initialState: {
    volts: 0,
  },
  name: 'voltmeter',
  reducers: {},
})
