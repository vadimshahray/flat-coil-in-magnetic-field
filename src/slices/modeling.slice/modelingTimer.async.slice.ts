import { ticksToTime } from '@utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CALCULATION_INTERVAL_MS } from '@constants'

let interval: NodeJS.Timer

export const startModelingTimer = createAsyncThunk<
  void,
  () => void,
  { state: RootState; dispatch: AppDispatch }
>('modeling/startTimer', (callback, { getState, dispatch }) => {
  let ticks = getState().modeling.time.ticks

  interval = setInterval(() => {
    ticks += CALCULATION_INTERVAL_MS
    dispatch(setModelingTimerTime(ticks))

    callback()
  }, CALCULATION_INTERVAL_MS)
})

export const stopModelingTimer = createAsyncThunk(
  'modeling/stopTimer',
  async () => {
    await clearInterval(interval)
  },
)

export const setModelingTimerTime = createAsyncThunk<Time, number>(
  'modeling/setTimerTime',
  (ticks) => {
    return ticksToTime(ticks)
  },
)
