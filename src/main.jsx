import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectInfo from '@/Pages/ProjectInfo.jsx'
import ErrorPage from '@/Pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/project-detail/:projectName',
    element: <ProjectInfo />
    // errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
