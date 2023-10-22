import storage from 'redux-persist/lib/storage'
import { getPersistConfig } from 'redux-deep-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist'
import {
  coilSlice,
  userSlice,
  sceneSlice,
  engineSlice,
  schemeSlice,
  sidebarSlice,
  modelingSlice,
  oscilloscopeSlice,
  currentSourceSlice,
  HelmholtzCoilsSlice,
} from '@slices'

const rootReducer = combineReducers({
  user: userSlice.reducer,
  engine: engineSlice.reducer,
  coil: coilSlice.reducer,
  oscilloscope: oscilloscopeSlice.reducer,
  HelmholtzCoils: HelmholtzCoilsSlice.reducer,
  currentSource: currentSourceSlice.reducer,
  scheme: schemeSlice.reducer,
  sidebar: sidebarSlice.reducer,
  scene: sceneSlice.reducer,
  modeling: modelingSlice.reducer,
})

const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  whitelist: [
    'user',
    'sidebar',
    'engine.rotationFrequency',
    'coil',
    'HelmholtzCoils',
    'oscilloscope.contrast',
    'oscilloscope.scaleX',
    'oscilloscope.scaleY',
    'currentSource.amperage',
  ],
  rootReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
