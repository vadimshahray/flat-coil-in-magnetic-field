import './index.css'
import React from 'react'
import { MainPage } from '@pages'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
