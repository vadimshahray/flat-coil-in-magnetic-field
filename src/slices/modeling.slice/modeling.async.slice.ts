import { createAsyncThunk } from '@reduxjs/toolkit'
import { stopModelingTimer, startModelingTimer } from '@slices'
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

export const stopModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/stop', async (_, { dispatch }) => {
  await dispatch(stopModelingTimer())
})

export const restartModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/restart', async (_, { dispatch }) => {
  await dispatch(
    startModelingTimer((ms: number) => {
      dispatch(calculateData(ms / 1000))
    }),
  )
})

export const dropModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/drop', async (_, { dispatch }) => {
  await dispatch(stopModelingTimer())
})
