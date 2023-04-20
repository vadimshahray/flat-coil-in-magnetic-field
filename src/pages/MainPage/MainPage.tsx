import { Scene } from './Scene'
import { Sidebar } from './Sidebar'
import { Controls } from './Controls'
import { assemblyScheme } from '@slices'
import React, { useEffect } from 'react'
import { useDeviceTypeValue, useDispatch } from '@hooks'

export const MainPage = () => {
  const dispatch = useDispatch()

  const showModelingSection = useDeviceTypeValue(true, false)

  useEffect(() => {
    if (!showModelingSection) {
      dispatch(assemblyScheme())
    }
  }, [showModelingSection, dispatch])

  return showModelingSection ? (
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
