type MotorSliceState = {
  speed: number
  rotationDirection: RotationDirection
}

interface MotorSlice extends SliceCaseReducers<MotorSliceState> {
  setMotorSpeed(state: MotorSliceState, action: PayloadAction<number>): void

  setMotorRotationDirection(
    state: MotorSliceState,
    action: PayloadAction<RotationDirection>,
  ): void
}
