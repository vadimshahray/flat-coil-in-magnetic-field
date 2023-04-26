type EngineSliceState = {
  isPowerSupplied: boolean

  rotationFrequency: number
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
}
