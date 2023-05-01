import React from 'react'
import { useSelector } from 'react-redux'
import { CubicBezierLine } from '@react-three/drei'
import {
  GRID_CELLS_COUNT_IN_QUARTER,
  ENGINE_ROTATION_FREQUENCY_MIN,
} from '@constants'
import {
  selectModelingVoltageMax,
  selectEngineRotationFrequency,
} from '@selectors'

type Props = {
  size: number
}
const T_MAX = 1 / ENGINE_ROTATION_FREQUENCY_MIN

const T_MAX_SIZE = T_MAX * GRID_CELLS_COUNT_IN_QUARTER

export const OscilloscopeWaveformGraphic = ({ size }: Props) => {
  const A = useSelector(selectModelingVoltageMax)

  const T = 1 / useSelector(selectEngineRotationFrequency)

  const TSize = (T / T_MAX_SIZE) * size
  const oscillationsInQuarter = new Array(Math.round(size / 2 / TSize)).fill(0)

  const renderOscillation = (_: any, i: number) => {
    const sign = i % 2 ? -1 : 1

    return (
      <>
        <CubicBezierLine
          key={i}
          start={[i * TSize, 0, 0]}
          midA={[i * TSize + TSize / 2, sign * A, 0]}
          midB={[i * TSize + TSize / 2, sign * A, 0]}
          end={[i * TSize + TSize, 0, 0]}
          color='red'
          lineWidth={1}
        />

        <CubicBezierLine
          key={i}
          start={[-i * TSize, 0, 0]}
          midA={[-i * TSize - TSize / 2, -sign * A, 0]}
          midB={[-i * TSize - TSize / 2, -sign * A, 0]}
          end={[-i * TSize - TSize, 0, 0]}
          color='red'
          lineWidth={1}
        />
      </>
    )
  }

  return <group>{oscillationsInQuarter.map(renderOscillation)}</group>
}
