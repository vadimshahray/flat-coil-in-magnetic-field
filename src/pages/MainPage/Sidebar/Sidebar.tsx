import React from 'react'
import { useSelector } from 'react-redux'
import { useDeviceTypeValue } from '@hooks'
import { ModelingInfo } from './ModelingInfo'
import { Configuration } from './Configuration'
import { selectIsSidebarVisible, selectModelingStatus } from '@selectors'

export const Sidebar = () => {
  const modelingStatus = useSelector(selectModelingStatus)
  const isSidebarVisible = useSelector(selectIsSidebarVisible)

  const sidebarWidth = useDeviceTypeValue(400, '100%')

  return (
    <div
      style={{
        width: isSidebarVisible ? sidebarWidth : 0,
        overflowY: 'auto',
      }}
    >
      {modelingStatus === 'idle' ? <Configuration /> : <ModelingInfo />}
    </div>
  )
}
