import { createSlice } from '@reduxjs/toolkit'
import {
  MOTOR_ROTATION_FREQUENCY_DEFAULT,
  MOTOR_ROTATION_DIRECTION_DEFAULT,
} from '@constants'

export const motorSlice = createSlice<MotorSliceState, MotorSlice>({
  name: 'motor',
  initialState: {
    rotationFrequency: MOTOR_ROTATION_FREQUENCY_DEFAULT,
    rotationDirection: MOTOR_ROTATION_DIRECTION_DEFAULT,
  },
  reducers: {
    setMotorRotationFrequency: (state, { payload }) => {
      if (payload <= 0) return

      state.rotationFrequency = Math.floor(payload)
    },

    setMotorRotationDirection: (state, { payload }) => {
      state.rotationDirection = payload
    },
  },
})

export const { setMotorRotationFrequency, setMotorRotationDirection } =
  motorSlice.actions
