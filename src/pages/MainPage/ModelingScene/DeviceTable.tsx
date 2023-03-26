import React from 'react'
import { COIL_SCENE_POSITION, VOLTMETER_SCENE_POSITION } from '@constants'

const Coil = React.lazy(() => import('src/models/Coil'))
const Table = React.lazy(() => import('src/models/Table'))
const Voltmeter = React.lazy(() => import('src/models/Voltmeter'))

export const DeviceTable = () => {
  return (
    <>
      <Table />

      <Coil position={COIL_SCENE_POSITION} />

      <Voltmeter position={VOLTMETER_SCENE_POSITION} />
    </>
  )
}
