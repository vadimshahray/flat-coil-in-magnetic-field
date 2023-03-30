type ConfigurationSliceState = {
  invalidFields: string[]
  isSidebarVisible: boolean
}

interface ConfigurationSlice
  extends SliceCaseReducers<ConfigurationSliceState> {
  addInvalidField(
    state: ConfigurationSliceState,
    action: PayloadAction<string>,
  ): void

  removeInvalidField(
    state: ConfigurationSliceState,
    action: PayloadAction<string>,
  ): void

  setIsSidebarVisible(
    state: ConfigurationSliceState,
    action: PayloadAction<boolean>,
  ): void
}
