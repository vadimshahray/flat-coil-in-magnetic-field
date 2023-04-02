import React from 'react'
import { WireHeap } from './WireHeap'
import { VoltmeterCoilPlusWire } from './VoltmeterCoilPlusWire'
import {
  COIL_SCENE_POSITION,
  VOLTMETER_SCENE_POSITION,
  HELMHOLTZ_COILS_SCENE_POSITION,
} from '@constants'

const Coil = React.lazy(() => import('src/models/Coil'))
const Table = React.lazy(() => import('src/models/Table'))
const Voltmeter = React.lazy(() => import('src/models/Voltmeter'))
const HelmholtzCoils = React.lazy(() => import('src/models/HelmholtzCoils'))

export const DeviceTable = () => {
  return (
    <>
      <Table />

      <HelmholtzCoils position={HELMHOLTZ_COILS_SCENE_POSITION} />

      <Coil position={COIL_SCENE_POSITION} />

      <VoltmeterCoilPlusWire />

      <Voltmeter position={VOLTMETER_SCENE_POSITION} />

      <WireHeap />
    </>
  )
}
