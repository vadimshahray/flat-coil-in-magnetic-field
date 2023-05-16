import React from 'react'
import { useSelector } from 'react-redux'
import { CubicBezierLine } from '@react-three/drei'
import {
  GRID_CELLS_COUNT_IN_QUARTER,
  ENGINE_ROTATION_FREQUENCY_MIN,
} from '@constants'
import {
  selectModelingVoltageMax,
  selectOscilloscopeScaleY,
  selectOscilloscopeScaleX,
  selectEngineRotationFrequency,
  selectIsOscilloscopeConnected,
  selectIsOscilloscopeConnectionInverted,
} from '@selectors'

type Props = {
  size: number
}
const T_MAX = 1 / ENGINE_ROTATION_FREQUENCY_MIN
const T_MAX_SIZE = T_MAX * GRID_CELLS_COUNT_IN_QUARTER

export const OscilloscopeWaveformGraphic = ({ size }: Props) => {
  const isConnected = useSelector(selectIsOscilloscopeConnected)
  const inverted = useSelector(selectIsOscilloscopeConnectionInverted)

  const V = scaleV(
    useSelector(selectModelingVoltageMax),
    useSelector(selectOscilloscopeScaleY),
  )
  const T = scaleT(
    1 / useSelector(selectEngineRotationFrequency),
    useSelector(selectOscilloscopeScaleX),
  )

  if (!isConnected) return null

  const TSize = (T / T_MAX_SIZE) * size
  const oscillationsInQuarter = new Array(Math.ceil(size / 2 / TSize)).fill(0)

  const renderOscillation = (_: any, i: number) => {
    const ySign = i % 2 ? -1 : 1
    const xSign = inverted ? -1 : 1

    return (
      <>
        <CubicBezierLine
          key={i}
          start={[xSign * (i * TSize), 0, 0]}
          midA={[xSign * (i * TSize + TSize / 2), ySign * V, 0]}
          midB={[xSign * (i * TSize + TSize / 2), ySign * V, 0]}
          end={[xSign * (i * TSize + TSize), 0, 0]}
          color='red'
          lineWidth={1}
        />

        <CubicBezierLine
          key={i}
          start={[xSign * (-i * TSize), 0, 0]}
          midA={[xSign * (-i * TSize - TSize / 2), -ySign * V, 0]}
          midB={[xSign * (-i * TSize - TSize / 2), -ySign * V, 0]}
          end={[xSign * (-i * TSize - TSize), 0, 0]}
          color='red'
          lineWidth={1}
        />
      </>
    )
  }

  return <group>{oscillationsInQuarter.map(renderOscillation)}</group>
}

const T_SCALE_INIT = 0.25
const scaleT = (T: number, scale: number) => {
  const k = T_SCALE_INIT / scale

  return T * k
}

const V_SCALE_INIT = 0.12875
const scaleV = (V: number, scale: number) => {
  const k = V_SCALE_INIT / scale

  return V * k
}
