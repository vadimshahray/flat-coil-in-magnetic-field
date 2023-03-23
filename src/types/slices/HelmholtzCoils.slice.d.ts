type HelmholtzCoilsSliceState = {
  radius: number
  amperage: number
  turnsCount: number
}

interface HelmholtzCoilsSlice
  extends SliceCaseReducers<HelmholtzCoilsSliceState> {
  setHelmholtzCoilsRadius(
    state: HelmholtzCoilsSliceState,
    action: PayloadAction<number>,
  ): void

  setHelmholtzCoilsAmperage(
    state: HelmholtzCoilsSliceState,
    action: PayloadAction<number>,
  ): void

  setHelmholtzCoilsTurnsCount(
    state: HelmholtzCoilsSliceState,
    action: PayloadAction<number>,
  ): void
}
