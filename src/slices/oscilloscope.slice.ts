import { createSlice } from '@reduxjs/toolkit'
import {
  OSCILLOSCOPE_SCALE_X_DEFAULT,
  OSCILLOSCOPE_SCALE_Y_DEFAULT,
  OSCILLOSCOPE_CONTRAST_DEFAULT,
} from '@constants'

export const oscilloscopeSlice = createSlice<
  OscilloscopeSliceState,
  OscilloscopeSlice
>({
  name: 'oscilloscope',
  initialState: {
    isPowerSupplied: false,

    contrast: OSCILLOSCOPE_CONTRAST_DEFAULT,

    scaleX: OSCILLOSCOPE_SCALE_X_DEFAULT,
    scaleY: OSCILLOSCOPE_SCALE_Y_DEFAULT,
  },
  reducers: {
    setOscilloscopeIsPowerSupplied: (state, { payload }) => {
      state.isPowerSupplied = payload
    },

    setOscilloscopeContrast: (state, { payload }) => {
      state.contrast = payload
    },

    setOscilloscopeScaleX: (state, { payload }) => {
      state.scaleX = payload
    },

    setOscilloscopeScaleY: (state, { payload }) => {
      state.scaleY = payload
    },
  },
})

export const {
  setOscilloscopeScaleX,
  setOscilloscopeScaleY,
  setOscilloscopeContrast,
  setOscilloscopeIsPowerSupplied,
} = oscilloscopeSlice.actions
