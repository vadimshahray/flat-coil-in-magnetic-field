type ModelingSliceState = {
  status: ModelingStatus

  data: ModelingData & { voltageMax: number; amperageMax: number }

  time: Time
}

type ModelingSlice = SliceCaseReducers<ModelingSliceState>
