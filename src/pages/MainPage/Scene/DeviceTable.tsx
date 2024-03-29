import React from 'react'
import { WireHeap } from './WireHeap'
import { ConnectedWires } from './ConnectedWires'
import {
  COIL_SCENE_POSITION,
  ENGINE_SCENE_POSITION,
  OSCILLOSCOPE_SCENE_POSITION,
  CURRENT_SOURCE_SCENE_POSITION,
  HELMHOLTZ_COILS_SCENE_POSITION,
} from '@constants'

const Coil = React.lazy(() => import('src/models/Coil'))
const Table = React.lazy(() => import('src/models/Table'))
const Engine = React.lazy(() => import('src/models/Engine'))
const Oscilloscope = React.lazy(() => import('src/models/Oscilloscope'))
const CurrentSource = React.lazy(() => import('src/models/CurrentSource'))
const HelmholtzCoils = React.lazy(() => import('src/models/HelmholtzCoils'))

export const DeviceTable = () => {
  return (
    <>
      <Table />

      <CurrentSource position={CURRENT_SOURCE_SCENE_POSITION} />

      <HelmholtzCoils position={HELMHOLTZ_COILS_SCENE_POSITION} />

      <Coil position={COIL_SCENE_POSITION} />

      <Oscilloscope position={OSCILLOSCOPE_SCENE_POSITION} />

      <Engine position={ENGINE_SCENE_POSITION} />

      <ConnectedWires />

      <WireHeap />
    </>
  )
}
