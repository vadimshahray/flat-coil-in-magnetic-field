type EngineSliceState = {
  rotationFrequency: number
  rotationDirection: RotationDirection
}

interface EngineSlice extends SliceCaseReducers<EngineSliceState> {
  setEngineRotationFrequency(
    state: EngineSliceState,
    action: PayloadAction<number>,
  ): void

  setEngineRotationDirection(
    state: EngineSliceState,
    action: PayloadAction<RotationDirection>,
  ): void
}
