import { Root } from '../components/Root/Root'
import { PageNotFound } from '../components/PageNotFound/PageNotFound'
import { Mainpage } from '../components/Mainpage/Mainpage'
import { ExpertiseNtd } from '../components/ExpertiseNtd/ExpertiseNtd'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "expertise",
        element: <ProtectedRoute><ExpertiseNtd /></ProtectedRoute>
      },
      {
        path: "/",
        element: <Mainpage />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  },
]

export { routes }