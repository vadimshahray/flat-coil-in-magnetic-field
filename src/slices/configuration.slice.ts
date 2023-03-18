import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  invalidFieldsNumber: 0,
}

export const configurationSlice = createSlice<
  ConfigurationSliceState,
  ConfigurationSlice
>({
  name: 'configuration',
  initialState,
  reducers: {
    increaseInvalidFieldsNumber: (state) => {
      state.invalidFieldsNumber++
    },
    decreaseInvalidFieldsNumber: (state) => {
      if (state.invalidFieldsNumber > 0) {
        state.invalidFieldsNumber--
      }
    },
  },
})

export const { increaseInvalidFieldsNumber, decreaseInvalidFieldsNumber } =
  configurationSlice.actions
