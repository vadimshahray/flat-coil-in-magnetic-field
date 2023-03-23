import { MOTOR_SPEED_MIN } from '@constants'
import { createSlice } from '@reduxjs/toolkit'

export const motorSlice = createSlice<MotorSliceState, MotorSlice>({
  name: 'motor',
  initialState: {
    speed: MOTOR_SPEED_MIN,
    rotationDirection: 'right',
  },
  reducers: {
    setMotorSpeed: (state, { payload }) => {
      if (payload <= 0) return

      state.speed = Math.floor(payload)
    },

    setMotorRotationDirection: (state, { payload }) => {
      state.rotationDirection = payload
    },
  },
})

export const { setMotorSpeed, setMotorRotationDirection } = motorSlice.actions
