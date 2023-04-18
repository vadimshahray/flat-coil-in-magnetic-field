import React from 'react'
import { RoomBox } from './RoomBox'
import { FLOOR_W, WALL_H } from '@constants'

const Door = React.lazy(() => import('src/models/Door'))
const Sink = React.lazy(() => import('src/models/Sink'))

export const Room = () => {
  return (
    <>
      <RoomBox />

      <Door
        position={[1.8 * FLOOR_W, 0, -2 * FLOOR_W]}
        rotation={[0, Math.PI, 0]}
      />

      <Sink position={[2.85 * FLOOR_W, 0.24 * WALL_H, -1.9 * FLOOR_W]} />
    </>
  )
}
