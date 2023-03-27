type MotorSliceState = {
  rotationFrequency: number
  rotationDirection: RotationDirection
}

interface MotorSlice extends SliceCaseReducers<MotorSliceState> {
  setMotorRotationFrequency(
    state: MotorSliceState,
    action: PayloadAction<number>,
  ): void

  setMotorRotationDirection(
    state: MotorSliceState,
    action: PayloadAction<RotationDirection>,
  ): void
}
