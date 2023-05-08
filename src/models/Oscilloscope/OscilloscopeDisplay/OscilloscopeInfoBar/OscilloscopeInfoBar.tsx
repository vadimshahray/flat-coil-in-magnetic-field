import React from 'react'
import { Line } from '@react-three/drei'
import { OscilloscopeInfoBarScaleY } from './OscilloscopeInfoBarScaleY'
import { OscilloscopeInfoBarScaleX } from './OscilloscopeInfoBarScaleX'
import { OscilloscopeInfoBarContrast } from './OscilloscopeInfoBarContrast'

type Props = JSX.IntrinsicElements['group'] & {
  height: number
}

const barWidth = 30

export const OscilloscopeInfoBar = ({ height, ...props }: Props) => {
  return (
    <group {...props}>
      <Line
        points={[
          [-15, height / 2],
          [barWidth, height / 2],
        ]}
        lineWidth={0.5}
        color='red'
      />

      <mesh position={[7.5, height / 2 - 3, 0]}>
        <boxGeometry args={[45, 6, 0.1]} />

        <meshStandardMaterial color='red' />
      </mesh>

      {/* <mesh position={[barWidth / 2, height / 2 - 2.6, 0]}>
        <boxGeometry args={[barWidth, 5, 1]} />

        <meshStandardMaterial color='red' />
      </mesh> */}

      <Line
        points={[
          [barWidth, height / 2],
          [barWidth, -height / 2],
        ]}
        lineWidth={0.5}
        color='red'
      />

      <Line
        points={[
          [-15, -height / 2],
          [barWidth, -height / 2],
        ]}
        lineWidth={0.5}
        color='red'
      />

      <OscilloscopeInfoBarScaleY position={[2, height / 2 - 9.5, 1]} />

      <OscilloscopeInfoBarScaleX position={[2, height / 2 - 14, 1]} />

      <OscilloscopeInfoBarContrast position={[2, height / 2 - 23.5, 1]} />
    </group>
  )
}
