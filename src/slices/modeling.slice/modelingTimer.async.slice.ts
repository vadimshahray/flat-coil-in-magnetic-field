import { ticksToTime } from '@utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CALCULATION_INTERVAL_MS } from '@constants'

export const startModelingTimer = createAsyncThunk<
  void,
  (t: number) => void,
  { state: RootState; dispatch: AppDispatch }
>('modeling/startTimer', (callback, { getState, dispatch }) => {
  let ticks = getState().modeling.time.ticks

  setInterval(() => {
    ticks += CALCULATION_INTERVAL_MS
    dispatch(setModelingTimerTime(ticks))

    callback(ticks)
  }, CALCULATION_INTERVAL_MS)
})

export const setModelingTimerTime = createAsyncThunk<Time, number>(
  'modeling/setTimerTime',
  (ticks) => {
    return ticksToTime(ticks)
  },
)
