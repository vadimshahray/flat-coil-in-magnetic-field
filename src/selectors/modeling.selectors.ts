export const selectModelingTime = (state: RootState) => state.modeling.time

export const selectModelingOperatingVoltage = (state: RootState) =>
  state.modeling.data.operatingVoltage

export const selectModelingVoltageMax = (state: RootState) =>
  state.modeling.data.voltageMax

export const selectModelingAmperage = (state: RootState) =>
  state.modeling.data.amperage

export const selectModelingInduction = (state: RootState) =>
  state.modeling.data.induction
