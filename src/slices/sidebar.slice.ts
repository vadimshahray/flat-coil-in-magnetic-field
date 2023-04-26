import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice<SidebarSliceState, SidebarSlice>({
  name: 'sidebar',
  initialState: {
    isSidebarVisible: true,
  },
  reducers: {
    setIsSidebarVisible: (state, { payload }) => {
      state.isSidebarVisible = payload
    },
  },
})

export const { setIsSidebarVisible } = sidebarSlice.actions
