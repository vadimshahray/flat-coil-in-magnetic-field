import React from 'react'
import { useSelector } from 'react-redux'
import { ModelingInfo } from './ModelingInfo'
import { Configuration } from './Configuration'
import { selectModelingStatus } from '@selectors'

export const Sidebar = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return (
    <div style={{ overflowY: 'auto' }}>
      {modelingStatus === 'idle' ? <Configuration /> : <ModelingInfo />}
    </div>
  )
}