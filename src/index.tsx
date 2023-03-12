import React from 'react'
import { MainPage } from '@pages'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@providers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  </React.StrictMode>,
)
