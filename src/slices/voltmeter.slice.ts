import { createSlice } from '@reduxjs/toolkit'

export const voltmeterSlice = createSlice<VoltmeterSliceState, VoltmeterSlice>({
  name: 'voltmeter',
  initialState: {
    volts: 0,
  },
  reducers: {},
})
