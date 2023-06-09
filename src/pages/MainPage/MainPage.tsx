import { Scene } from './Scene'
import { Sidebar } from './Sidebar'
import { Controls } from './Controls'
import React, { useEffect } from 'react'
import { SplashScreen } from './SplashScreen'
import { UserGuideDialog } from './UserGuideDialog'
import { assemblyScheme, startModeling } from '@slices'
import { useDeviceTypeValue, useDispatch } from '@hooks'

export const MainPage = () => {
  const dispatch = useDispatch()

  const showModelingSection = useDeviceTypeValue(true, false)

  const handleSplashScreenClose = () => {
    dispatch(startModeling())
  }

  useEffect(() => {
    if (!showModelingSection) {
      dispatch(assemblyScheme())
    }
  }, [showModelingSection, dispatch])

  return (
    <>
      <SplashScreen onClose={handleSplashScreenClose} />

      <UserGuideDialog />

      {showModelingSection ? (
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
      )}
    </>
  )
}
