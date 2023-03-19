import { createSlice } from '@reduxjs/toolkit'

export const sceneSlice = createSlice<SceneSliceState, SceneSlice>({
  name: 'scene',
  initialState: {},
  reducers: {
    setDeviceInView: (state, { payload }) => {
      state.deviceInView = payload
    },
  },
})

export const { setDeviceInView } = sceneSlice.actions
