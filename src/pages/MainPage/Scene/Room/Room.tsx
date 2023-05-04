import React from 'react'
import { RoomBox } from './RoomBox'
import { degToRad } from 'three/src/math/MathUtils'
import { LeftWindow, RightWindow } from './Windows'
import { CEILING_W, FLOOR_D, FLOOR_W, WALL_D, WALL_H } from '@constants'

const Fan = React.lazy(() => import('src/models/Fan'))
const Door = React.lazy(() => import('src/models/Door'))
const Lamp = React.lazy(() => import('src/models/Lamp'))
const Sink = React.lazy(() => import('src/models/Sink'))
const Sofa = React.lazy(() => import('src/models/Sofa'))
const Chair = React.lazy(() => import('src/models/Chair'))
const Plinth = React.lazy(() => import('src/models/Plinth'))
const Bookshelf = React.lazy(() => import('src/models/Bookshelf'))
const Projector = React.lazy(() => import('src/models/Projector'))
const Blackboard = React.lazy(() => import('src/models/Blackboard'))
const LightSwitch = React.lazy(() => import('src/models/LightSwitch'))
const PowerSocket = React.lazy(() => import('src/models/PowerSocket'))
const ComputerDesk = React.lazy(() => import('src/models/ComputerDesk'))
const ProjectorScreen = React.lazy(() => import('src/models/ProjectorScreen'))

export const Room = () => {
  return (
    <>
      <RoomBox />

      <group>
        <Plinth scale={[80, 1, 1]} position={[0, 5, -2 * FLOOR_W + 5]} />

        <Plinth
          scale={[80, 1, 1]}
          position={[0, 5, 2 * FLOOR_W - 5]}
          rotation={[0, Math.PI, 0]}
        />

        <Plinth
          scale={[55, 1, 1]}
          position={[-3 * FLOOR_W + 5, 5, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />

        <Plinth
          scale={[55, 1, 1]}
          position={[3 * FLOOR_W - 5, 5, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>

      <group position={[0, 2 * WALL_H - 57, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <Lamp position={[0, 0, -CEILING_W]} />

        <Lamp position={[0, 0, CEILING_W]} />
      </group>

      <Projector
        position={[0, 2 * WALL_H - 220, 480]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Door position={[-1.35 * FLOOR_W, 0, 2 * FLOOR_W - 10]} />

      <Sink
        position={[-2.33 * FLOOR_W, 0.24 * WALL_H, 1.9 * FLOOR_W]}
        rotation={[0, Math.PI, 0]}
      />

      <Sofa
        position={[-3 * FLOOR_D + 400, 0, 370]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Bookshelf
        position={[-3 * FLOOR_D + 170, 0, -FLOOR_W - 240]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <group position={[0, 0.55 * WALL_H, -2 * WALL_D + 40]}>
        <LeftWindow position={[-1.25 * FLOOR_W, 0, 0]} />

        <RightWindow position={[1.25 * FLOOR_W, 0, 0]} />
      </group>

      <PowerSocket position={[270, 200, -2 * WALL_D + 16]} />

      <ComputerDesk
        position={[3 * FLOOR_D - 226, 0, -FLOOR_W - 380]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <PowerSocket
        position={[3 * FLOOR_D - 16, 200, -FLOOR_W]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      <Chair
        position={[3 * FLOOR_D - 660, 0, -FLOOR_W - 350]}
        rotation={[0, degToRad(70), 0]}
      />

      <ProjectorScreen
        position={[3 * FLOOR_D - 60, WALL_H - 430, 480]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      <Fan
        position={[2.5 * FLOOR_D, 0, 2 * FLOOR_W - 320]}
        rotation={[0, degToRad(-120), 0]}
      />

      <PowerSocket
        position={[2.5 * FLOOR_D, 200, 2 * FLOOR_W - 16]}
        rotation={[0, Math.PI, 0]}
      />

      <Blackboard position={[0.7 * FLOOR_D, 0, 2 * FLOOR_W - 320]} />

      <LightSwitch
        position={[-FLOOR_D + 200, WALL_H + 100, 2 * FLOOR_W - 40]}
        rotation={[0, Math.PI, 0]}
      />
    </>
  )
}
