import { createSlice } from '@reduxjs/toolkit'
import {
  ENGINE_ROTATION_FREQUENCY_DEFAULT,
  ENGINE_ROTATION_DIRECTION_DEFAULT,
} from '@constants'

export const engineSlice = createSlice<EngineSliceState, EngineSlice>({
  name: 'engine',
  initialState: {
    rotationFrequency: ENGINE_ROTATION_FREQUENCY_DEFAULT,
    rotationDirection: ENGINE_ROTATION_DIRECTION_DEFAULT,
  },
  reducers: {
    setEngineRotationFrequency: (state, { payload }) => {
      if (payload <= 0) return

      state.rotationFrequency = Math.floor(payload)
    },

    setEngineRotationDirection: (state, { payload }) => {
      state.rotationDirection = payload
    },
  },
})

export const { setEngineRotationFrequency, setEngineRotationDirection } =
  engineSlice.actions
