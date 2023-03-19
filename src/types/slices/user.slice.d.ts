type UserSliceState = {
  language: Language
  colorMode: ColorMode
}

interface UserSlice extends SliceCaseReducers<UserSliceState> {
  setLanguage(state: UserSliceState, action: PayloadAction<Language>): void

  setColorMode(state: UserSliceState, action: PayloadAction<ColorMode>): void
}
