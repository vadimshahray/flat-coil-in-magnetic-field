import { createSlice } from '@reduxjs/toolkit'
import { CURRENT_SOURCE_AMPERAGE_DEFAULT } from '@constants'

export const currentSourceSlice = createSlice<
  CurrentSourceSliceState,
  CurrentSourceSlice
>({
  name: 'currentSource',
  initialState: {
    isPowerSupplied: false,
    amperage: CURRENT_SOURCE_AMPERAGE_DEFAULT,
  },
  reducers: {
    setCurrentSourceIsPowerSupplied: (state, { payload }) => {
      state.isPowerSupplied = payload
    },

    setCurrentSourceAmperage: (state, { payload }) => {
      state.amperage = payload
    },
  },
})

export const { setCurrentSourceIsPowerSupplied, setCurrentSourceAmperage } =
  currentSourceSlice.actions
