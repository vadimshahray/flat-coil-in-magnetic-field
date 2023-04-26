import storage from 'redux-persist/lib/storage'
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
  voltmeterSlice,
  currentSourceSlice,
  HelmholtzCoilsSlice,
} from '@slices'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
  engine: engineSlice.reducer,
  coil: coilSlice.reducer,
  voltmeter: voltmeterSlice.reducer,
  HelmholtzCoils: HelmholtzCoilsSlice.reducer,
  currentSource: currentSourceSlice.reducer,
  scheme: schemeSlice.reducer,
  sidebar: sidebarSlice.reducer,
  scene: sceneSlice.reducer,
  modeling: modelingSlice.reducer,
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
