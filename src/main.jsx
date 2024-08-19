import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ColorGradient from "./Main/ColorGradient.jsx"
import Colors from './Main/Colors.jsx'
import ColorPalette from './Main/ColorPalette.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<ColorPalette />} />
      <Route path='/colors' element={<Colors />} />
      <Route path='/gradients' element={<ColorGradient />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
