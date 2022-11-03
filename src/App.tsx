import { Route, Routes } from 'react-router-dom'
import MainManager from './pages/MainManager'
import TaskChecker from './pages/TaskChecker'
import * as P from './pages'

function App() {
  return (
    <Routes>
      <Route path='/manage' element={<MainManager />} />
      <Route path="taskcommand" element={<TaskChecker/>}/>
      <Route path="/" element={<P.MainPage />} />
      <Route path="/login" element={<P.LoginPage />} />
      <Route path="/register" element={<P.RegisterPage />} />
      <Route path="/my" element={<P.MyPage />} />
    </Routes>
  )
}

export default App
