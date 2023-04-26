type SidebarSliceState = {
  isSidebarVisible: boolean
}

interface SidebarSlice extends SliceCaseReducers<SidebarSliceState> {
  setIsSidebarVisible(
    state: SidebarSliceState,
    action: PayloadAction<boolean>,
  ): void
}
