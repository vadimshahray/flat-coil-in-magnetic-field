type WireSliceState = {
  material: MetalMaterial

  draggableWireIndex: number | null
}

interface WireSlice extends SliceCaseReducers<WireSliceState> {
  setWireMaterial(
    state: WireSliceState,
    action: PayloadAction<MetalMaterial>,
  ): void

  setDraggableWire(
    state: WireSliceState,
    action: PayloadAction<number | null>,
  ): void
}
