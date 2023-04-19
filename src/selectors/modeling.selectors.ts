export const selectModelingStatus = (state: RootState) => state.modeling.status

export const selectModelingTime = (state: RootState) => state.modeling.time

export const selectModelingVoltage = (state: RootState) =>
  state.modeling.data.voltage

export const selectModelingVoltageMax = (state: RootState) =>
  state.modeling.data.voltageMax

export const selectModelingAmperage = (state: RootState) =>
  state.modeling.data.amperage

export const selectModelingAmperageMax = (state: RootState) =>
  state.modeling.data.amperageMax

export const selectModelingInduction = (state: RootState) =>
  state.modeling.data.induction
