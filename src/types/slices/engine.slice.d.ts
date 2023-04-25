type EngineSliceState = {
  isPowerSupplied: boolean

  rotationFrequency: number
  rotationDirection: RotationDirection
}

interface EngineSlice extends SliceCaseReducers<EngineSliceState> {
  setEngineIsPowerSupplied(
    state: EngineSliceState,
    action: PayloadAction<boolean>,
  ): void

  setEngineRotationFrequency(
    state: EngineSliceState,
    action: PayloadAction<number>,
  ): void

  setEngineRotationDirection(
    state: EngineSliceState,
    action: PayloadAction<RotationDirection>,
  ): void
}
