import { ticksToTime } from '@utils'
import { createSlice } from '@reduxjs/toolkit'
import { calculateData } from './modelingCalculation.async.slice'
import { setModelingTimerTime } from './modelingTimer.async.slice'
import {
  dropModeling,
  stopModeling,
  startModeling,
  restartModeling,
} from './modeling.async.slice'

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState: {
    status: 'idle',
    data: {
      voltage: 0,
      voltageMax: 0,
      amperage: 0,
      amperageMax: 0,
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
      .addCase(restartModeling.fulfilled, (state) => {
        state.status = 'started'
      })
      .addCase(stopModeling.fulfilled, (state) => {
        state.status = 'stopped'
      })

      .addCase(dropModeling.fulfilled, (state) => {
        state.status = 'idle'
        state.time = ticksToTime(0)

        state.data = {
          voltage: 0,
          voltageMax: 0,
          amperage: 0,
          amperageMax: 0,
          induction: 0,
        }
      })

      .addCase(setModelingTimerTime.fulfilled, (state, { payload }) => {
        state.time = payload
      })

      .addCase(calculateData.fulfilled, (state, { payload }) => {
        state.data = {
          voltageMax: Math.max(state.data.voltageMax, payload.voltage),
          amperageMax: Math.max(state.data.amperageMax, payload.amperage),
          ...payload,
        }
      })
  },
})
