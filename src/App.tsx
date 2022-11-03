import { Route, Routes } from 'react-router-dom'
import * as P from './pages'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<P.LoginPage />} />
      <Route path="/register" element={<P.RegisterPage />} />
    </Routes>
  )
}

export default App
