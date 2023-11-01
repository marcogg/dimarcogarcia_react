import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/',
  element: <App />
}])
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectInfo from '@/Pages/ProjectInfo.jsx'
import ErrorPage from '@/Pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }, {
    path: '/:projectTitle',
    element: <ProjectInfo />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  <RouterProvider router={router} />
)
