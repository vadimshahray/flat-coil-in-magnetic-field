type ConfigurationSliceState = {
  invalidFields: string[]
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
}
