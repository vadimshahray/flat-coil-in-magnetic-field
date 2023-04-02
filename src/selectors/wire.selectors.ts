export const selectWireMaterial = (state: RootState) => state.wire.material

export const selectDraggableWireIndex = (state: RootState) =>
  state.wire.draggableWireIndex

export const selectWires = (state: RootState) => state.wire.wires

export const selectVoltmeterCoilMinusWire = (state: RootState) =>
  state.wire.wires.findIndex(
    (w) =>
      w.connectionA === '@VoltmeterMinus' && w.connectionB === '@CoilMinus',
  )

export const selectVoltmeterCoilPlusWire = (state: RootState) =>
  state.wire.wires.findIndex(
    (w) => w.connectionA === '@VoltmeterPlus' && w.connectionB === '@CoilPlus',
  )

export const selectAreAllWiresDisconnected = (state: RootState) =>
  state.wire.wires.every((w) => !w.connectionA && !w.connectionB)
