type SchemeSliceState = {
  wires: Wire[]

  status: SchemeStatus
}

interface SchemeSlice extends SliceCaseReducers<SchemeSliceState> {
  connectWire(
    state: SchemeSliceState,
    action: PayloadAction<
      {
        id: number
      } & WireConnection
    >,
  ): void

  disconnectWire(state: SchemeSliceState, action: PayloadAction<number>): void

  assemblyScheme(state: SchemeSliceState): void

  disassemblyScheme(state: SchemeSliceState): void
}
