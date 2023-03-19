type ModelingSliceState = {
  status: ModelingStatus

  time: Time
}

interface ModelingSlice extends SliceCaseReducers<ModelingSliceState> {
  setModelingStatus(
    state: ModelingSliceState,
    action: PayloadAction<ModelingStatus>,
  ): void
}
