import { Route, Routes } from 'react-router-dom'
import * as P from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.MainPage />} />
      <Route path="/login" element={<P.LoginPage />} />
    </Routes>
  )
}

export default App
