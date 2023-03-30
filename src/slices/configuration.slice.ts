import { createSlice } from '@reduxjs/toolkit'

export const configurationSlice = createSlice<
  ConfigurationSliceState,
  ConfigurationSlice
>({
  name: 'configuration',
  initialState: {
    invalidFields: [],
    isSidebarVisible: true,
  },
  reducers: {
    addInvalidField: (state, { payload }) => {
      if (state.invalidFields.includes(payload)) return

      state.invalidFields.push(payload)
    },
    removeInvalidField: (state, { payload }) => {
      const i = state.invalidFields.findIndex((f) => f === payload)

      if (i === -1) return

      state.invalidFields.splice(i, 1)
    },

    setIsSidebarVisible: (state, { payload }) => {
      state.isSidebarVisible = payload
    },
  },
})

export const { addInvalidField, removeInvalidField, setIsSidebarVisible } =
  configurationSlice.actions
