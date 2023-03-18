type MotorSliceState = {
  speed: number
}

interface MotorSlice extends SliceCaseReducers<MotorSliceState> {
  setMotorSpeed(state: MotorSliceState, action: PayloadAction<number>): void
}
