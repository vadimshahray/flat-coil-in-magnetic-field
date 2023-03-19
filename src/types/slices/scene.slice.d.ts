type SceneSliceState = {
  deviceInView?: Device
}

interface SceneSlice extends SliceCaseReducers<SceneSliceState> {
  setDeviceInView(state: SceneSliceState, action: PayloadAction<Device>): void
}
