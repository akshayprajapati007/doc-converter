import { lazy, Suspense } from 'react'
import { Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppRoutings } from 'utility/enums/app-routings'
import Layout from 'components/Layout'
const HomePage = lazy(() => import('pages/HomePage'))
const DocToPDF = lazy(() => import('pages/DocToPDF'))

interface IRoute {
  path: string
  component:
    | React.LazyExoticComponent<React.FC<{}>>
    | React.ComponentType<{}>
    | any
  isProtectedRoute?: boolean
}

const routes: IRoute[] = [
  {
    path: AppRoutings.HomePage,
    component: <HomePage />,
  },
  {
    path: AppRoutings.DocToPDF,
    component: <DocToPDF />,
  },
]

const AllRoutes: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes?.map(({ path, component }, key) => (
            <Route key={key} path={path} element={component} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default AllRoutes
