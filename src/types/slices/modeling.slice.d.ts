type ModelingSliceState = {
  status: ModelingStatus

  data: ModelingData

  time: Time
}

type ModelingSlice = SliceCaseReducers<ModelingSliceState>
