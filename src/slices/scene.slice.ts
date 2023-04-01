import { createSlice } from '@reduxjs/toolkit'

export const sceneSlice = createSlice<SceneSliceState, SceneSlice>({
  name: 'scene',
  initialState: {},
  reducers: {
    setSceneCameraViewPoint: (state, { payload }) => {
      state.cameraViewPoint = payload
    },
  },
})

export const { setSceneCameraViewPoint } = sceneSlice.actions
