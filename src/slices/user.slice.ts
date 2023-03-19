import { setI18nConfig } from '@languages'
import { createSlice } from '@reduxjs/toolkit'
import { getStorageItem, setStorageItem } from '@storage'

export const userSlice = createSlice<UserSliceState, UserSlice>({
  name: 'user',
  initialState: {
    language: (getStorageItem('@userLanguage') as Languages) || 'ru',
    colorMode: 'light',
  },
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload
      setI18nConfig(payload)

      setStorageItem('@userLanguage', payload)
    },

    setColorMode: (state, { payload }) => {
      state.colorMode = payload
    },
  },
})

export const { setLanguage, setColorMode } = userSlice.actions
