import React from 'react'
import { MainPage } from '@pages'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@providers'
import { store, persistor } from './store'
import { ErrorBoundary } from '@components'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <ErrorBoundary>
            <MainPage />
          </ErrorBoundary>
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
)
