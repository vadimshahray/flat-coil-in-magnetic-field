import { createSlice } from '@reduxjs/toolkit'
import { COIL_TURNS_COUNT_MIN } from '@constants'

export const coilSlice = createSlice<CoilSliceState, CoilSlice>({
  name: 'coil',
  initialState: {
    turnsCount: COIL_TURNS_COUNT_MIN,
  },
  reducers: {
    setCoilTurnsCount: (state, { payload }) => {
      state.turnsCount = payload
    },
  },
})

export const { setCoilTurnsCount } = coilSlice.actions
