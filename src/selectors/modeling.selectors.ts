export const selectModelingStatus = (state: RootState) => state.modeling.status

export const selectModelingTime = (state: RootState) => state.modeling.time

export const selectModelingVoltage = (state: RootState) =>
  state.modeling.data.voltage

export const selectModelingAmperage = (state: RootState) =>
  state.modeling.data.amperage

export const selectModelingInduction = (state: RootState) =>
  state.modeling.data.induction
