import { createSlice } from '@reduxjs/toolkit'
import { ENGINE_ROTATION_FREQUENCY_DEFAULT } from '@constants'

export const engineSlice = createSlice<EngineSliceState, EngineSlice>({
  name: 'engine',
  initialState: {
    isPowerSupplied: false,
    rotationFrequency: ENGINE_ROTATION_FREQUENCY_DEFAULT,
  },
  reducers: {
    setEngineIsPowerSupplied: (state, { payload }) => {
      state.isPowerSupplied = payload
    },

    setEngineRotationFrequency: (state, { payload }) => {
      state.rotationFrequency = Math.floor(payload)
    },
  },
})

export const { setEngineIsPowerSupplied, setEngineRotationFrequency } =
  engineSlice.actions
