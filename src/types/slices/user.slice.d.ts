type UserSliceState = {
  colorMode: ColorMode
}

interface UserSlice extends SliceCaseReducers<UserSliceState> {
  setColorMode(state: UserSliceState, action: PayloadAction<ColorMode>): void
}
