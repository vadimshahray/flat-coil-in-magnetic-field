import { ticksToTime } from '@utils'
import { createSlice } from '@reduxjs/toolkit'

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState: {
    status: 'idle',
    time: ticksToTime(0),
  },
  reducers: {
    setModelingStatus: (state, { payload }) => {
      state.status = payload
    },
  },
})

export const { setModelingStatus } = modelingSlice.actions
