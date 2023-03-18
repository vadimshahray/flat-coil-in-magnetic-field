type ConfigurationSliceState = {
  invalidFieldsNumber: number
}

interface ConfigurationSlice
  extends SliceCaseReducers<ConfigurationSliceState> {
  increaseInvalidFieldsNumber(state: ConfigurationSliceState): void

  decreaseInvalidFieldsNumber(state: ConfigurationSliceState): void
}
