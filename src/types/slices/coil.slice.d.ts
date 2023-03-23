type CoilSliceState = {
  turnsCount: number
}

interface CoilSlice extends SliceCaseReducers<CoilSliceState> {
  setCoilTurnsCount(state: CoilSliceState, action: PayloadAction<number>): void
}
