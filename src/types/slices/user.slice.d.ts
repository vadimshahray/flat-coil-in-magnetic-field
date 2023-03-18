type UserSliceState = {
  language: Languages
  colorMode: ColorMode
}

interface UserSlice extends SliceCaseReducers<UserSliceState> {
  setLanguage(state: UserSliceState, action: PayloadAction<Languages>): void

  setColorMode(state: UserSliceState, action: PayloadAction<ColorMode>): void
}
