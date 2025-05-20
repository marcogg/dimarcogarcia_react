import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectInfo from '@/Pages/ProjectInfo.jsx'
import ErrorPage from '@/Pages/ErrorPage.jsx'
import { ProjectProvider } from './context/ProjectContext.jsx'
import MoreProjects from './components/MoreProjects/MoreProjects.jsx'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/project-detail/:projectName',
    element: <ProjectInfo />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleReCaptchaProvider
    reCaptchaKey='6Lc_c-QqAAAAAAarmJ4BockR0G_L9F_zWr1Tz5eB'
    language='english'
    scriptProps={{
      async: false, // optional, default to false,
      defer: false, // optional, default to false
      appendTo: 'head', // optional, default to "head", can be "head" or "body",
      nonce: undefined // optional, default undefined
    }}
    container={{ // optional to render inside custom element
      element: '[required_id_or_htmlelement]',
      parameters: {
        badge: '[inline|bottomright|bottomleft]', // optional, default undefined
        theme: 'dark' // optional, default undefined
      }
    }}
  >
    <ProjectProvider>
      <RouterProvider router={router}>
        <App />
        <ProjectInfo />
        <MoreProjects />
      </RouterProvider>
    </ProjectProvider>
  </GoogleReCaptchaProvider>
)
