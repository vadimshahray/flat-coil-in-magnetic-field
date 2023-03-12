import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice<ThemeSliceState, ThemeSlice>({
  name: 'theme',
  initialState: {
    colorMode: 'light',
  },
  reducers: {
    setColorMode: (state, { payload }) => {
      state.colorMode = payload
    },
  },
})

export const { setColorMode } = themeSlice.actions
