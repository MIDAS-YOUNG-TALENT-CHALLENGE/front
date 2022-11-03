import { Route, Routes } from 'react-router-dom'
import * as P from './pages'

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<P.AdminPage />} />
    </Routes>
  )
}

export default App
