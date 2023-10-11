import React from 'react'
import List from './pages/manage/List'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router/index'
import 'antd/dist/reset.css'
import './App.css'
function App() {
  return <RouterProvider router={routerConfig}></RouterProvider>
}

export default App
