import React from 'react'
import {
  WALL_H,
  WALL_D,
  FLOOR_W,
  FLOOR_D,
  CEILING_W,
  CEILING_D,
} from '@constants'

const Wall = React.lazy(() => import('src/models/Wall'))
const Floor = React.lazy(() => import('src/models/Floor'))
const Ceiling = React.lazy(() => import('src/models/Ceiling'))

export const RoomBox = () => {
  return (
    <group rotation={[0, Math.PI / 2, 0]}>
      <group position={[0, 2 * WALL_H, 0]}>
        <group position={[0, 0, -2.5 * CEILING_D]}>{CeilingRow}</group>
        <group position={[0, 0, -1.5 * CEILING_D]}>{CeilingRow}</group>
        <group position={[0, 0, -0.5 * CEILING_D]}>{CeilingRow}</group>
        <group position={[0, 0, 0.5 * CEILING_D]}>{CeilingRow}</group>
        <group position={[0, 0, 1.5 * CEILING_D]}>{CeilingRow}</group>
        <group position={[0, 0, 2.5 * CEILING_D]}>{CeilingRow}</group>
      </group>

      <group visible={false}>
        <group position={[-2 * WALL_D, 0, 0]}>
          <group position={[0, WALL_H, 0]}>{WallLong}</group>
          {WallLong}
        </group>

        <group position={[2 * WALL_D, 0, 0]}>
          <group position={[0, WALL_H, 0]}>{WallLong}</group>
          {WallLong}
        </group>

        <group position={[0, 0, -3 * WALL_D]} rotation={[0, Math.PI / 2, 0]}>
          <group position={[0, WALL_H, 0]}>{WallShort}</group>
          {WallShort}
        </group>

        <group position={[0, 0, 3 * WALL_D]} rotation={[0, Math.PI / 2, 0]}>
          <group position={[0, WALL_H, 0]}>{WallShort}</group>
          {WallShort}
        </group>
      </group>

      <group>
        <group position={[0, 0, -2.5 * FLOOR_D]}>{FloorRow}</group>
        <group position={[0, 0, -1.5 * FLOOR_D]}>{FloorRow}</group>
        <group position={[0, 0, -0.5 * FLOOR_D]}>{FloorRow}</group>
        <group position={[0, 0, 0.5 * FLOOR_D]}>{FloorRow}</group>
        <group position={[0, 0, 1.5 * FLOOR_D]}>{FloorRow}</group>
        <group position={[0, 0, 2.5 * FLOOR_D]}>{FloorRow}</group>
      </group>
    </group>
  )
}

const CeilingRow = (
  <>
    <Ceiling position={[-1.5 * CEILING_W, 0, 0]} />
    <Ceiling position={[-0.5 * CEILING_W, 0, 0]} />
    <Ceiling position={[0.5 * CEILING_W, 0, 0]} />
    <Ceiling position={[1.5 * CEILING_W, 0, 0]} />
  </>
)

const FloorRow = (
  <>
    <Floor position={[-1.5 * FLOOR_W, 0, 0]} />
    <Floor position={[-0.5 * FLOOR_W, 0, 0]} />
    <Floor position={[0.5 * FLOOR_W, 0, 0]} />
    <Floor position={[1.5 * FLOOR_W, 0, 0]} />
  </>
)

const WallLong = (
  <>
    <Wall position={[0, 0, -2.5 * WALL_D]} />
    <Wall position={[0, 0, -1.5 * WALL_D]} />
    <Wall position={[0, 0, -0.5 * WALL_D]} />
    <Wall position={[0, 0, 0.5 * WALL_D]} />
    <Wall position={[0, 0, 1.5 * WALL_D]} />
    <Wall position={[0, 0, 2.5 * WALL_D]} />
  </>
)

const WallShort = (
  <>
    <Wall position={[0, 0, -1.5 * WALL_D]} />
    <Wall position={[0, 0, -0.5 * WALL_D]} />
    <Wall position={[0, 0, 0.5 * WALL_D]} />
    <Wall position={[0, 0, 1.5 * WALL_D]} />
  </>
)
