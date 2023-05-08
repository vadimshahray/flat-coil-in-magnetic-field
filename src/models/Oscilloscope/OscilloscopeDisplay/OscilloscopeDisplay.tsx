import React from 'react'
import { OscilloscopeInfoBar } from './OscilloscopeInfoBar'
import { OscilloscopeWaveform } from './OscilloscopeWaveform'
import { OscilloscopeContrastSurface } from './OscilloscopeContrastSurface'

type Props = JSX.IntrinsicElements['group'] & {
  width: number
  height: number
}

export const OscilloscopeDisplay = ({ width, height, ...props }: Props) => {
  return (
    <group {...props}>
      <mesh>
        <boxGeometry args={[width, height, 1]} />
        <meshBasicMaterial color='red' transparent opacity={0.15} />
      </mesh>

      <OscilloscopeWaveform size={height - 10} position={[-40, 0, 0]} />

      <OscilloscopeInfoBar height={height - 10} position={[30, 0, 0]} />

      <OscilloscopeContrastSurface width={width} height={height} />
    </group>
  )
}
