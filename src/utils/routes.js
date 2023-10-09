import { Root } from '../components/Root/Root'
import { PageNotFound } from '../components/PageNotFound/PageNotFound'
import { Mainpage } from '../components/Mainpage/Mainpage'

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Mainpage />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]

export { routes }