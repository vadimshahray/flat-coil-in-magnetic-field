type OscilloscopeSliceState = {
  isPowerSupplied: boolean

  contrast: number

  scaleX: number
  scaleY: number
}

interface OscilloscopeSlice extends SliceCaseReducers<OscilloscopeSliceState> {
  setOscilloscopeIsPowerSupplied(
    state: OscilloscopeSliceState,
    action: PayloadAction<boolean>,
  ): void

  setOscilloscopeContrast(
    state: OscilloscopeSliceState,
    action: PayloadAction<number>,
  ): void

  setOscilloscopeScaleX(
    state: OscilloscopeSliceState,
    action: PayloadAction<number>,
  ): void

  setOscilloscopeScaleY(
    state: OscilloscopeSliceState,
    action: PayloadAction<number>,
  ): void
}
