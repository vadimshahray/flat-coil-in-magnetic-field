import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectCoilTurnsCount,
  selectCoilFrameWidth,
  selectCoilFrameLength,
  selectHelmholtzCoilsRadius,
  selectMotorRotationFrequency,
  selectHelmholtzCoilsAmperage,
  selectHelmholtzCoilsTurnsCount,
} from '@selectors'

export const calculateData = createAsyncThunk<
  ModelingData,
  number,
  { state: RootState }
>('modeling/calculateMeteoriteMovement', async (t, { getState }) => {
  const state = getState()

  const mu = 4 * Math.PI * 10 ** -7
  const k = (2 / Math.sqrt(5)) ** 3

  const lp = 0.2
  const Pm = 2.8 * 10 ** -8

  const n = selectCoilTurnsCount(state)
  const R = selectHelmholtzCoilsRadius(state)
  const Ig = selectHelmholtzCoilsAmperage(state)
  const N = selectHelmholtzCoilsTurnsCount(state)
  const Nu = selectMotorRotationFrequency(state)

  const a = selectCoilFrameWidth(state)
  const b = selectCoilFrameLength(state)
  const S = a * b

  const B = (mu * k * Ig * N) / R

  const Em = 2 * Math.PI * Nu * n * B * S
  const E = Em * sin(2 * Math.PI * Nu * t)

  const Rob =
    (Pm * (2 * n * (a + b))) / (4.7 * 10 ** -8) +
    (2 * Pm * lp) / (0.5 * 10 ** -6)

  const I = E / Rob

  return {
    voltage: E,
    amperage: I,
    induction: B,
  }
})

const sin = (n: number) => {
  return Math.sin((n * Math.PI) / 180)
}
