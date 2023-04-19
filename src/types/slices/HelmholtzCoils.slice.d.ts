type HelmholtzCoilsSliceState = {
  radius: number
  turnsCount: number
}

interface HelmholtzCoilsSlice
  extends SliceCaseReducers<HelmholtzCoilsSliceState> {
  setHelmholtzCoilsRadius(
    state: HelmholtzCoilsSliceState,
    action: PayloadAction<number>,
  ): void

  setHelmholtzCoilsTurnsCount(
    state: HelmholtzCoilsSliceState,
    action: PayloadAction<number>,
  ): void
}
