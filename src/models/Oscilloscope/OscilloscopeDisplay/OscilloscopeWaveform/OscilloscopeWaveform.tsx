import React from 'react'
import { Line } from '@react-three/drei'
import { OscilloscopeWaveformGrid } from './OscilloscopeWaveformGrid'
import { OscilloscopeWaveformGraphic } from './OscilloscopeWaveformGraphic'

type Props = JSX.IntrinsicElements['group'] & {
  size: number
}

export const OscilloscopeWaveform = ({ size, ...props }: Props) => {
  return (
    <group {...props}>
      {/** Рамка */}
      <Line
        points={[
          [-size / 2, size / 2, 0],
          [size / 2, size / 2, 0],
          [size / 2, -size / 2, 0],
          [-size / 2, -size / 2, 0],
          [-size / 2, size / 2, 0],
        ]}
        lineWidth={0.5}
        color='red'
      />

      {/** Ось Y */}
      <Line
        points={[
          [0, size / 2, 0],
          [0, -size / 2, 0],
        ]}
        lineWidth={0.5}
        color='red'
      />

      {/** Ось X */}
      <Line
        points={[
          [size / 2, 0, 0],
          [-size / 2, 0, 0],
        ]}
        lineWidth={0.5}
        color='red'
      />

      <OscilloscopeWaveformGrid size={size} />

      <OscilloscopeWaveformGraphic size={size} />
    </group>
  )
}
