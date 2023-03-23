import { createSlice } from '@reduxjs/toolkit'
import {
  MOTOR_SPEED_DEFAULT,
  MOTOR_ROTATION_DIRECTION_DEFAULT,
} from '@constants'

export const motorSlice = createSlice<MotorSliceState, MotorSlice>({
  name: 'motor',
  initialState: {
    speed: MOTOR_SPEED_DEFAULT,
    rotationDirection: MOTOR_ROTATION_DIRECTION_DEFAULT,
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
