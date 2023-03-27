type CoilSliceState = {
  turnsCount: number
  frame: {
    width: number
    length: number
  }
}

interface CoilSlice extends SliceCaseReducers<CoilSliceState> {
  setCoilTurnsCount(state: CoilSliceState, action: PayloadAction<number>): void

  setCoilFrameWidth(state: CoilSliceState, action: PayloadAction<number>): void

  setCoilFrameLength(state: CoilSliceState, action: PayloadAction<number>): void
}
