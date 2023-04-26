import { createAsyncThunk } from '@reduxjs/toolkit'
import { WIRES_LENGTH, WIRES_RESISTIVITY, WIRES_SECTION } from '@constants'
import {
  selectCoilTurnsCount,
  selectCoilFrameWidth,
  selectCoilFrameLength,
  selectHelmholtzCoilsRadius,
  selectIsVoltmeterConnected,
  selectCurrentSourceAmperage,
  selectEngineIsPowerSupplied,
  selectEngineRotationFrequency,
  selectHelmholtzCoilsTurnsCount,
  selectAreHelmholtzCoilsConnected,
  selectCurrentSourceIsPowerSupplied,
} from '@selectors'

export const calculateData = createAsyncThunk<
  ModelingData,
  number,
  { state: RootState }
>('modeling/calculateData', async (t, { getState }) => {
  const state = getState()

  const result: ModelingData = {
    amperage: 0,
    induction: 0,
    voltage: 0,
  }

  const isVoltmeterConnected = selectIsVoltmeterConnected(state)
  const isEnginePowerSupplied = selectEngineIsPowerSupplied(state)
  const areHelmholtzCoilsConnected = selectAreHelmholtzCoilsConnected(state)
  const isCurrentSourcePowerSupplied = selectCurrentSourceIsPowerSupplied(state)

  if (!areHelmholtzCoilsConnected || !isCurrentSourcePowerSupplied)
    return result

  const mu = 4 * Math.PI * 10 ** -7
  const k = (2 / Math.sqrt(5)) ** 3

  const lp = WIRES_LENGTH
  const Pm = WIRES_RESISTIVITY

  const n = selectCoilTurnsCount(state)
  const R = selectHelmholtzCoilsRadius(state)
  const Ig = selectCurrentSourceAmperage(state)
  const N = selectHelmholtzCoilsTurnsCount(state)
  const Nu = selectEngineRotationFrequency(state)

  const a = selectCoilFrameWidth(state)
  const b = selectCoilFrameLength(state)
  const S = a * b

  const B = (result.induction = (mu * k * Ig * N) / R)

  if (!isVoltmeterConnected || !isEnginePowerSupplied) return result

  const Em = 2 * Math.PI * Nu * n * B * S
  const E = (result.voltage = Em * sin(2 * Math.PI * Nu * t))

  const Rob =
    (Pm * (2 * n * (a + b))) / (4.7 * 10 ** -8) + (2 * Pm * lp) / WIRES_SECTION

  result.amperage = E / Rob

  return result
})

const sin = (n: number) => {
  return Math.sin((n * Math.PI) / 180)
}
