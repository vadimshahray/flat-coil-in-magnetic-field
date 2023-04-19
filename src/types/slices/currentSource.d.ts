type CurrentSourceSliceState = {
  amperage: number
}

interface CurrentSourceSlice
  extends SliceCaseReducers<CurrentSourceSliceState> {
  setCurrentSourceAmperage(
    state: CurrentSourceSliceState,
    action: PayloadAction<number>,
  ): void
}
