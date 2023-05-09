import { createSlice } from '@reduxjs/toolkit'
import {
  OSCILLOSCOPE_SCALE_Y_DEFAULT,
  OSCILLOSCOPE_SCALE_X_DEFAULT,
  OSCILLOSCOPE_CONTRAST_DEFAULT,
  OSCILLOSCOPE_SCALE_Y_STEP,
  OSCILLOSCOPE_SCALE_X_STEP,
  OSCILLOSCOPE_SCALE_Y_MAX,
  OSCILLOSCOPE_SCALE_Y_MIN,
  OSCILLOSCOPE_SCALE_X_MAX,
  OSCILLOSCOPE_SCALE_X_MIN,
} from '@constants'
import { numberBetween } from '@utils'

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

    configurableParameterI: 0,
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

    changeOscilloscopeConfigurableParameterI: (state) => {
      state.configurableParameterI++

      if (state.configurableParameterI > 1) {
        state.configurableParameterI = 0
      }
    },

    setOscilloscopeConfigurableParameter: (state, { payload }) => {
      switch (state.configurableParameterI) {
        case 0:
          state.scaleY = numberBetween(
            state.scaleY + OSCILLOSCOPE_SCALE_Y_STEP * Math.sign(payload),
            OSCILLOSCOPE_SCALE_Y_MIN,
            OSCILLOSCOPE_SCALE_Y_MAX,
          )
          break
        case 1:
          state.scaleX = numberBetween(
            state.scaleX + OSCILLOSCOPE_SCALE_X_STEP * Math.sign(payload),
            OSCILLOSCOPE_SCALE_X_MIN,
            OSCILLOSCOPE_SCALE_X_MAX,
          )
          break
        default:
      }
    },
  },
})

export const {
  setOscilloscopeScaleX,
  setOscilloscopeScaleY,
  setOscilloscopeContrast,
  setOscilloscopeIsPowerSupplied,
  changeOscilloscopeConfigurableParameterI,
  setOscilloscopeConfigurableParameter,
} = oscilloscopeSlice.actions
