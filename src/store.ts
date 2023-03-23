import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  coilSlice,
  userSlice,
  sceneSlice,
  motorSlice,
  modelingSlice,
  voltmeterSlice,
  configurationSlice,
  HelmholtzCoilsSlice,
} from '@slices'
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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'motor'],
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
  motor: motorSlice.reducer,
  coil: coilSlice.reducer,
  voltmeter: voltmeterSlice.reducer,
  HelmholtzCoils: HelmholtzCoilsSlice.reducer,
  configuration: configurationSlice.reducer,
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
