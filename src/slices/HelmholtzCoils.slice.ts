import { createSlice } from '@reduxjs/toolkit'

export const HelmholtzCoilsSlice = createSlice<
  HelmholtzCoilsSliceState,
  HelmholtzCoilsSlice
>({
  name: 'HelmholtzCoils',
  initialState: {
    radius: 0,
    amperage: 0,
    turnsCount: 0,
  },
  reducers: {
    setHelmholtzCoilsRadius: (state, { payload }) => {
      state.radius = payload
    },

    setHelmholtzCoilsAmperage: (state, { payload }) => {
      state.amperage = payload
    },

    setHelmholtzCoilsTurnsCount: (state, { payload }) => {
      state.turnsCount = payload
    },
  },
})

export const {
  setHelmholtzCoilsRadius,
  setHelmholtzCoilsAmperage,
  setHelmholtzCoilsTurnsCount,
} = HelmholtzCoilsSlice.actions
