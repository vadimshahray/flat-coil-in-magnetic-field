import { setI18nConfig } from '@languages'
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice<UserSliceState, UserSlice>({
  name: 'user',
  initialState: {
    language: 'ru',
    colorMode: 'light',
  },
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload
      setI18nConfig(payload)
    },

    setColorMode: (state, { payload }) => {
      state.colorMode = payload
    },
  },
})

export const { setLanguage, setColorMode } = userSlice.actions
