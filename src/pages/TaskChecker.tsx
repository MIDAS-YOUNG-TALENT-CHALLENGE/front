import styled from 'styled-components'
import TaskList, { TaskDataType } from '../components/taskChecker/TaskList'
import TopBar from '../components/taskChecker/TopBar'
import { useState } from 'react'
import MakeTask from '../components/taskChecker/MakeTask'

function TaskChecker() {
  const [modalTask, setModal] = useState(false)
  const [taskLen,setLen] = useState(0)
  const [tasks, setTask] = useState<TaskDataType[]>([])
  return (
    <_Wrapper>
      <TopBar setModal={setModal} taskLen={taskLen}/>
      <TaskList setLen={setLen} setTask={setTask} tasks={tasks}/>
      <MakeTask modalTask={modalTask} setModal={setModal} setTask={setTask} tasks={tasks}/>
    </_Wrapper>
  )
}

const _Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

export default TaskChecker
