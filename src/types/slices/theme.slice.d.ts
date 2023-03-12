type ThemeSliceState = {
  colorMode: ColorMode
}

interface ThemeSlice extends SliceCaseReducers<ThemeSliceState> {
  setColorMode(state: ThemeSliceState, action: PayloadAction<ColorMode>): void
}
