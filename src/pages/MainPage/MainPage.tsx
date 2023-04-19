import React from 'react'
import { Scene } from './Scene'
import { Sidebar } from './Sidebar'
import { Controls } from './Controls'
import { useMediaQuery, useTheme } from '@mui/material'

export const MainPage = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return isDesktop ? (
    <div
      style={{
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gridTemplateRows: '1fr 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Scene />

      <Sidebar />

      <Controls />
    </div>
  ) : (
    <Sidebar />
  )
}
