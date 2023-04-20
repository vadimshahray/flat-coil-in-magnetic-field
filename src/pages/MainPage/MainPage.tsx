import { Scene } from './Scene'
import { Sidebar } from './Sidebar'
import { useDispatch } from '@hooks'
import { Controls } from './Controls'
import React, { useEffect } from 'react'
import { assemblyScheme } from '@slices'
import { useMediaQuery, useTheme } from '@mui/material'

export const MainPage = () => {
  const dispatch = useDispatch()

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  useEffect(() => {
    if (!isDesktop) {
      dispatch(assemblyScheme())
    }
  }, [isDesktop, dispatch])

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
