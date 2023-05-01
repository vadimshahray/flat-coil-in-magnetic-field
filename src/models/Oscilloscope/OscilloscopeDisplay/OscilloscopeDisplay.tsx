import React from 'react'
import { OscilloscopeWaveform } from './OscilloscopeWaveform'

type Props = JSX.IntrinsicElements['group'] & {
  width: number
  height: number
}

export const OscilloscopeDisplay = ({ width, height, ...props }: Props) => {
  return (
    <group {...props}>
      <mesh>
        <boxGeometry args={[width, height, 1]} />
        <meshBasicMaterial color='red' transparent opacity={0.1} />
      </mesh>

      <OscilloscopeWaveform size={height - 10} />
    </group>
  )
}
