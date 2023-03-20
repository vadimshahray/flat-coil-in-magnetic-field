import { ticksToTime } from '@utils'
import { createSlice } from '@reduxjs/toolkit'
import { setModelingTimerTime } from './modelingTimer.async.slice'
import {
  stopModeling,
  startModeling,
  dropModeling,
  restartModeling,
} from './modeling.async.slice'

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState: {
    status: 'idle',
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
      })

      .addCase(setModelingTimerTime.fulfilled, (state, { payload }) => {
        state.time = payload
      })
  },
})
