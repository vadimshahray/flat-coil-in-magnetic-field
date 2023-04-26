import { startModelingTimer } from '@slices'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { calculateData } from './modelingCalculation.async.slice'

export const startModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/start', async (_, { dispatch }) => {
  await dispatch(
    startModelingTimer((ms: number) => {
      dispatch(calculateData(ms / 1000))
    }),
  )
})
