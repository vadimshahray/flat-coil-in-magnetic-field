type PayloadAction<
  P = void,
  T extends string = string,
  M = never,
  E = never,
> = import('@reduxjs/toolkit').PayloadAction<P, T, M, E>

type SliceCaseReducers<T> = import('@reduxjs/toolkit').SliceCaseReducers<T>

type RootState = ReturnType<typeof import('src/store').store.getState>

type AppDispatch = typeof import('src/store').store.dispatch
