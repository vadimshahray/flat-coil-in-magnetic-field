import React from 'react'
import { useSelector } from 'react-redux'
import { ModelingInfo } from './ModelingInfo'
import { Configuration } from './Configuration'
import { selectIsSidebarVisible, selectModelingStatus } from '@selectors'

export const Sidebar = () => {
  const modelingStatus = useSelector(selectModelingStatus)
  const isSidebarVisible = useSelector(selectIsSidebarVisible)

  return (
    <div
      style={{
        width: isSidebarVisible ? '100%' : 0,
        overflowY: 'auto',
      }}
    >
      {modelingStatus === 'idle' ? <Configuration /> : <ModelingInfo />}
    </div>
  )
}
