type ModelingSliceState = {
  status: ModelingStatus

  time: Time
}

type ModelingSlice = SliceCaseReducers<ModelingSliceState>
