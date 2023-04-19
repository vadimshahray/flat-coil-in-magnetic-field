import { createSlice } from '@reduxjs/toolkit'
import {
  HELMHOLTZ_COILS_RADIUS_DEFAULT,
  HELMHOLTZ_COILS_TURNS_COUNT_DEFAULT,
} from '@constants'

export const HelmholtzCoilsSlice = createSlice<
  HelmholtzCoilsSliceState,
  HelmholtzCoilsSlice
>({
  name: 'HelmholtzCoils',
  initialState: {
    radius: HELMHOLTZ_COILS_RADIUS_DEFAULT,
    turnsCount: HELMHOLTZ_COILS_TURNS_COUNT_DEFAULT,
  },
  reducers: {
    setHelmholtzCoilsRadius: (state, { payload }) => {
      state.radius = payload
    },

    setHelmholtzCoilsTurnsCount: (state, { payload }) => {
      state.turnsCount = payload
    },
  },
})

export const { setHelmholtzCoilsRadius, setHelmholtzCoilsTurnsCount } =
  HelmholtzCoilsSlice.actions
