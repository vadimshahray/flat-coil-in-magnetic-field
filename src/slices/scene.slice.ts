import { createSlice } from '@reduxjs/toolkit'

export const sceneSlice = createSlice<SceneSliceState, SceneSlice>({
  name: 'scene',
  initialState: {},
  reducers: {
    setSceneDeviceInView: (state, { payload }) => {
      state.deviceInView = payload
    },
  },
})

export const { setSceneDeviceInView } = sceneSlice.actions
