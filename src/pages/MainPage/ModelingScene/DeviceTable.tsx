import React from 'react'

const Coil = React.lazy(() => import('src/models/Coil'))
const Table = React.lazy(() => import('src/models/Table'))
const Voltmeter = React.lazy(() => import('src/models/Voltmeter'))

export const DeviceTable = () => {
  return (
    <>
      <Table />

      <Coil position={[-40, 309, -120]} />

      <Voltmeter position={[80, 286, 0]} />
    </>
  )
}
