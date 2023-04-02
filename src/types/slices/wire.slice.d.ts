type WireSliceState = {
  material: MetalMaterial

  wires: Wire[]
  draggableWireIndex: number | null
}

interface WireSlice extends SliceCaseReducers<WireSliceState> {
  setWireMaterial(
    state: WireSliceState,
    action: PayloadAction<MetalMaterial>,
  ): void

  setDraggableWire(state: WireSliceState, action: PayloadAction<number | null>)

  setWireConnection(
    state: WireSliceState,
    action: PayloadAction<{
      wireIndex: number
      connectionA: Terminal | null
      connectionB: Terminal | null
    }>,
  )
}
