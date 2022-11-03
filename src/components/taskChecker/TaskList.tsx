import styled from 'styled-components'
import TaskModal from './TaskModal'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { viewTask } from '../../lib/viewTask'

export interface TaskDataType {
  taskId: string
  teamId: string
  title: string
  location: string
  description: string
  mentionId: number
  createdAt: string
  important: boolean
  started: boolean
  completed: boolean
  mention: {
    nickname: string
  }
}

interface PropsType {
  setLen: Dispatch<SetStateAction<number>>
  setTask: Dispatch<SetStateAction<TaskDataType[]>>
  tasks: TaskDataType[]
}

function TaskList({ setLen, tasks, setTask }: PropsType) {
  const [modal, setmodal] = useState(0)

  const offModal = () => setmodal(0)

  useEffect(() => {
    viewTask().then(e => {
      setTask(e.data)
      setLen(e.data.length)
    })
  }, [])

  return (
    <>
      {modal !== 0 && <_Background onClick={offModal} />}
      <_Wrapper>
        {tasks.map((e, i) => (
          <>
            {modal === i + 1 && <TaskModal task={e} />}
            <_TaskBox onClick={() => setmodal(i + 1)}>
              <_TaskName>{e.title}</_TaskName>
              <_TaskMention>{e.mention.nickname}</_TaskMention>
              <_TaskProcess process={true}>
                {e.important ? '중요' : '쉬운'}
              </_TaskProcess>
            </_TaskBox>
          </>
        ))}
      </_Wrapper>
    </>
  )
}

const _Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 20%;
  z-index: 1;
  background-color: black;
`

const _Wrapper = styled.div`
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  width: 800px;
  position: relative;
  margin: 50px 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const _TaskBox = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f5f9;
  padding: 10px 50px;
  margin: 5px 0;
  border-radius: 5px;
  :hover {
    background-color: #dedfe1;
  }
`

const _TaskName = styled.span`
  width: 300px;
`

const _TaskProcess = styled.span<{ process: boolean }>`
  font-size: 16px;
  width: 60px;
  font-weight: bold;
  color: ${({ process }) => (process ? 'orange' : 'green')};
`

const _TaskMention = styled.span`
  color: #48dbfb;
  font-size: 16px;
  font-weight: bold;
`

export default TaskList
