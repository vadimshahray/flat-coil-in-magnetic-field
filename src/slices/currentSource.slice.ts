import { createSlice } from '@reduxjs/toolkit'
import { CURRENT_SOURCE_AMPERAGE_DEFAULT } from '@constants'

export const currentSourceSlice = createSlice<
  CurrentSourceSliceState,
  CurrentSourceSlice
>({
  name: 'currentSource',
  initialState: {
    amperage: CURRENT_SOURCE_AMPERAGE_DEFAULT,
  },
  reducers: {
    setCurrentSourceAmperage: (state, { payload }) => {
      state.amperage = payload
    },
  },
})

export const { setCurrentSourceAmperage } = currentSourceSlice.actions
