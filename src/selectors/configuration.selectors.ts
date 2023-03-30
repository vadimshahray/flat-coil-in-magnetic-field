export const selectInvalidFieldsLength = (state: RootState) =>
  state.configuration.invalidFields.length

export const selectIsSidebarVisible = (state: RootState) =>
  state.configuration.isSidebarVisible
