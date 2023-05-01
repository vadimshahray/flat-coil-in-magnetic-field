import React from 'react'
import { Line } from '@react-three/drei'
import { GRID_CELLS_COUNT_IN_QUARTER } from '@constants'

type Props = {
  size: number
}

const gridLines = new Array(GRID_CELLS_COUNT_IN_QUARTER * 2).fill(0)

export const OscilloscopeWaveformGrid = ({ size }: Props) => {
  const cellSize = size / GRID_CELLS_COUNT_IN_QUARTER / 2

  const renderLineH = (_: any, i: number) => (
    <Line
      key={i}
      points={[
        [-size / 2, size / 2 - cellSize * i, 0],
        [size / 2, size / 2 - cellSize * i, 0],
      ]}
      dashed
      dashSize={cellSize / 10}
      lineWidth={0.5}
      color='red'
    />
  )
  const renderLineV = (_: any, i: number) => (
    <Line
      key={i}
      points={[
        [-size / 2 + cellSize * i, size / 2, 0],
        [-size / 2 + cellSize * i, -size / 2, 0],
      ]}
      dashed
      dashSize={cellSize / 10}
      lineWidth={0.5}
      color='red'
    />
  )

  return (
    <group>
      {gridLines.map(renderLineH)}
      {gridLines.map(renderLineV)}
    </group>
  )
}
