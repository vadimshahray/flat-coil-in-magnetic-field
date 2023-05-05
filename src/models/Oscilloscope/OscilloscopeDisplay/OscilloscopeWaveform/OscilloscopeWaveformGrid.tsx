import React from 'react'
import { useTranslate } from '@languages'
import { Line, Text } from '@react-three/drei'
import { GRID_CELLS_COUNT_IN_QUARTER } from '@constants'

type Props = {
  size: number
}

const gridLines = new Array(GRID_CELLS_COUNT_IN_QUARTER * 2).fill(0)

export const OscilloscopeWaveformGrid = ({ size }: Props) => {
  const translate = useTranslate('OscilloscopeWaveformSI')

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

      <Text
        fontSize={2.5}
        font={
          'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.woff'
        }
        color='red'
        position={[4, size / 2 - 3, 1]}
      >
        {`U, ${translate('y')}`}
      </Text>

      <Text
        fontSize={2.5}
        font={
          'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.woff'
        }
        color='red'
        position={[size / 2 - 3, -2, 1]}
      >
        {`t, ${translate('x')}`}
      </Text>
    </group>
  )
}
