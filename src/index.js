import React from 'react'
import ReactDOM from 'react-dom/client'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/ru'

import './index.css'

import { App } from './components'
import reportWebVitals from './reportWebVitals'
import { JsonPlaceholderContextProvider } from './contexts/JsonPlaceholderContext'
import { CurrentUserContextProvider } from './contexts/CurrentUserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <JsonPlaceholderContextProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
          <App />
        </LocalizationProvider>
      </JsonPlaceholderContextProvider>
    </CurrentUserContextProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
