import { Route, Routes } from 'react-router-dom'
import MainManager from './pages/MainManager'
import TaskChecker from './pages/TaskChecker'

function App() {
  return (
    <Routes>
      <Route path='/manage' element={<MainManager />} />
      <Route path="taskcommand" element={<TaskChecker/>}/>
    </Routes>
  )
}

export default App
