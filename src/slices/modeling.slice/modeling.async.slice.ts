import { createAsyncThunk } from '@reduxjs/toolkit'
import { stopModelingTimer, startModelingTimer } from '@slices'

export const startModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/start', async (_, { dispatch }) => {
  await dispatch(startModelingTimer(() => null))
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
    startModelingTimer(() => {
      null
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
