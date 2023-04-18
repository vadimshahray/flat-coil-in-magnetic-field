import React from 'react'
import { RoomBox } from './RoomBox'
import { FLOOR_W } from '@constants'

const Door = React.lazy(() => import('src/models/Door'))

export const Room = () => {
  return (
    <>
      <RoomBox />

      <Door
        position={[1.8 * FLOOR_W, 0, -2 * FLOOR_W]}
        rotation={[0, Math.PI, 0]}
      />
    </>
  )
}
