import Routes from 'components/Routes'
import { Suspense } from 'react'

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes />
    </Suspense>
  )
}

export default App
