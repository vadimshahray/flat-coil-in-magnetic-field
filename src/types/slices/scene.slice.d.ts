type SceneSliceState = {
  deviceInView?: Device
}

interface SceneSlice extends SliceCaseReducers<SceneSliceState> {
  setSceneDeviceInView(
    state: SceneSliceState,
    action: PayloadAction<Device | undefined>,
  ): void
}
