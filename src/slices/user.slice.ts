import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice<UserSliceState, UserSlice>({
  name: 'user',
  initialState: {
    colorMode: 'light',
  },
  reducers: {
    setColorMode: (state, { payload }) => {
      state.colorMode = payload
    },
  },
})

export const { setColorMode } = userSlice.actions
