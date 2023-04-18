import React from 'react'
import { RoomBox } from './RoomBox'
import { FLOOR_W, WALL_D, WALL_H } from '@constants'

const Door = React.lazy(() => import('src/models/Door'))
const Sink = React.lazy(() => import('src/models/Sink'))
const Window = React.lazy(() => import('src/models/Window'))

export const Room = () => {
  return (
    <>
      <RoomBox />

      <Door position={[-1.35 * FLOOR_W, 0, 2 * FLOOR_W]} />

      <Sink
        position={[-2.33 * FLOOR_W, 0.24 * WALL_H, 1.9 * FLOOR_W]}
        rotation={[0, Math.PI, 0]}
      />

      <group position={[0, 0.55 * WALL_H, -2 * WALL_D + 40]}>
        <Window position={[-1.25 * FLOOR_W, 0, 0]} />

        <Window position={[1.25 * FLOOR_W, 0, 0]} />
      </group>
    </>
  )
}
