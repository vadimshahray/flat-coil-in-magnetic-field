type CurrentSourceSliceState = {
  isPowerSupplied: boolean

  amperage: number
}

interface CurrentSourceSlice
  extends SliceCaseReducers<CurrentSourceSliceState> {
  setCurrentSourceIsPowerSupplied(
    state: CurrentSourceSliceState,
    action: PayloadAction<boolean>,
  ): void

  setCurrentSourceAmperage(
    state: CurrentSourceSliceState,
    action: PayloadAction<number>,
  ): void
}
