import { Route, Routes } from 'react-router-dom'
import MainManager from './pages/MainManager'

function App() {
  return (
    <Routes>
      <Route path='/manage' element={<MainManager />} />
    </Routes>
  )
}

export default App
