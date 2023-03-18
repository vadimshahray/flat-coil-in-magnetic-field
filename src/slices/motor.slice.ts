import { createSlice } from '@reduxjs/toolkit'

export const motorSlice = createSlice<MotorSliceState, MotorSlice>({
  initialState: {
    speed: 0,
  },
  name: 'motor',
  reducers: {
    setMotorSpeed: (state, { payload }) => {
      if (payload <= 0) return

      state.speed = Math.floor(payload)
    },
  },
})

export const { setMotorSpeed } = motorSlice.actions
