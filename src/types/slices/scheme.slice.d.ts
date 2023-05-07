type SchemeSliceState = {
  wires: Wire[]

  connectingWire: number | null

  status: SchemeStatus
}

interface SchemeSlice extends SliceCaseReducers<SchemeSliceState> {
  setSchemeConnectingWireId(
    state: SchemeSliceState,
    action: PayloadAction<number>,
  ): void

  dropSchemeConnectingWire(state: SchemeSliceState): void

  connectWire(state: SchemeSliceState, action: PayloadAction<Terminal>): void

  disconnectWire(state: SchemeSliceState, action: PayloadAction<Terminal>): void

  assemblyScheme(state: SchemeSliceState): void

  disassemblyScheme(state: SchemeSliceState): void
}
