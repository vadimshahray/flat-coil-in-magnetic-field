export const selectCurrentSourceIsPowerSupplied = (state: RootState) =>
  state.currentSource.isPowerSupplied

export const selectCurrentSourceAmperage = (state: RootState) =>
  state.currentSource.amperage
