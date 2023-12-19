import { Scene } from './Scene'
import { Sidebar } from './Sidebar'
import { Controls } from './Controls'
import React, { useEffect } from 'react'
import { getStorageItem } from '@storage'
import { SplashScreen } from './SplashScreen'
import { UserGuideDialog } from './UserGuideDialog'
import { assemblyScheme, startModeling } from '@slices'
import { useDeviceTypeValue, useDisclose, useDispatch } from '@hooks'

export const MainPage = () => {
  const dispatch = useDispatch()

  const { isOpen, onClose } = useDisclose(!getStorageItem('@userReadGuide'))
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

      <UserGuideDialog isOpen={isOpen} onClose={onClose} />

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
