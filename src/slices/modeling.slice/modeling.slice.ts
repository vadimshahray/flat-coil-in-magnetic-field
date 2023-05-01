import { ticksToTime } from '@utils'
import { createSlice } from '@reduxjs/toolkit'
import { calculateData } from './modelingCalculation.async.slice'
import { setModelingTimerTime } from './modelingTimer.async.slice'

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState: {
    data: {
      voltageMax: 0,
      operatingVoltage: 0,
      amperage: 0,
      induction: 0,
    },
    time: ticksToTime(0),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setModelingTimerTime.fulfilled, (state, { payload }) => {
        state.time = payload
      })

      .addCase(calculateData.fulfilled, (state, { payload }) => {
        state.data = {
          ...payload,
        }
      })
  },
})
