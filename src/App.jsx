import { BrowserRouter } from 'react-router-dom'
import AuthRouter from '@/router/auth'
import Router from '@/router'

function App() {
  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  )
}

export default App
