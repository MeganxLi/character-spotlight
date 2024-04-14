import React from 'react'

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './styles/Reset.css'
import './styles/Base.css'
import router from './route/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
