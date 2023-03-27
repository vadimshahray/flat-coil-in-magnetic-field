type WireSliceState = {
  material: MetalMaterial
}

interface WireSlice extends SliceCaseReducers<WireSliceState> {
  setWireMaterial(
    state: WireSliceState,
    action: PayloadAction<MetalMaterial>,
  ): void
}
