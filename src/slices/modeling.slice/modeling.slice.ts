import { ticksToTime } from '@utils'
import { createSlice } from '@reduxjs/toolkit'
import { startModeling } from './modeling.async.slice'
import { calculateData } from './modelingCalculation.async.slice'
import { setModelingTimerTime } from './modelingTimer.async.slice'

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState: {
    status: 'idle',
    data: {
      voltage: 0,
      amperage: 0,
      induction: 0,
    },
    time: ticksToTime(0),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startModeling.fulfilled, (state) => {
        state.status = 'started'
      })

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
