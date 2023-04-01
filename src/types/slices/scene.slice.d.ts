type SceneSliceState = {
  cameraViewPoint?: CameraViewPoint
}

interface SceneSlice extends SliceCaseReducers<SceneSliceState> {
  setSceneCameraViewPoint(
    state: SceneSliceState,
    action: PayloadAction<CameraViewPoint | undefined>,
  ): void
}
