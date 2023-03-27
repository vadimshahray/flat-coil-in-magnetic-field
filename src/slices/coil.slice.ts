import { createSlice } from '@reduxjs/toolkit'
import {
  COIL_TURNS_COUNT_DEFAULT,
  COIL_FRAME_WIDTH_DEFAULT,
  COIL_FRAME_LENGTH_DEFAULT,
} from '@constants'

export const coilSlice = createSlice<CoilSliceState, CoilSlice>({
  name: 'coil',
  initialState: {
    turnsCount: COIL_TURNS_COUNT_DEFAULT,
    frame: {
      width: COIL_FRAME_WIDTH_DEFAULT,
      length: COIL_FRAME_LENGTH_DEFAULT,
    },
  },
  reducers: {
    setCoilTurnsCount: (state, { payload }) => {
      state.turnsCount = payload
    },

    setCoilFrameWidth: (state, { payload }) => {
      state.frame.width = payload
    },

    setCoilFrameLength: (state, { payload }) => {
      state.frame.length = payload
    },
  },
})

export const { setCoilTurnsCount, setCoilFrameWidth, setCoilFrameLength } =
  coilSlice.actions
