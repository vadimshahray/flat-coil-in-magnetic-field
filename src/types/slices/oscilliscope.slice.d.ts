type OscilloscopeSliceState = {
  isPowerSupplied: boolean
}

interface OscilloscopeSlice extends SliceCaseReducers<OscilloscopeSliceState> {
  setOscilloscopeIsPowerSupplied(
    state: OscilloscopeSliceState,
    action: PayloadAction<boolean>,
  ): void
}
