import styled from 'styled-components'
import { useState } from 'react'
import { TaskerType } from './MakeTask'
import { TaskDataType } from './TaskList'

interface PropsType {
  task: TaskDataType
}

function TaskModal({ task }: PropsType) {
  const [revise, setvise] = useState(false)

  return (
    <_Wrapper>
      <_Location>
        <_TaskName>{task.title}</_TaskName>
        <_TaskContent>
          {task.description}
        </_TaskContent>
        <_TaskFlexLine>
          <_TaskMention>@{task.mention.nickname}</_TaskMention>
          <_TaskProcess process={task.important}>
            {task.important ? '중요' : '쉬운'}
          </_TaskProcess>
        </_TaskFlexLine>
        <_FixOrRemove>삭제</_FixOrRemove>
        <_FixOrRemove>수정</_FixOrRemove>
      </_Location>
    </_Wrapper>
  )
}

const _Wrapper = styled.div`
  position: fixed;
  width: 700px;
  height: 470px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 2;
`

const _Location = styled.div`
  padding: 30px 50px;
`

const _TaskName = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const _TaskContent = styled.div`
  font-size: 18px;
  height: 250px;
  margin: 10px 0;
`

const _TaskFlexLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const _TaskMention = styled.span`
  font-weight: bold;
  font-size: 18px;
`

const _TaskProcess = styled.span<{ process: boolean }>`
  color: ${({ process }) => (process ? 'orange' : 'green')};
  font-weight: bold;
`

const _FixOrRemove = styled.button`
  border-radius: 5px;
  background-color: white;
  border: 1px solid #48dbfb;
  color: #48dbfb;
  font-weight: bold;
  padding: 8px 40px;
  margin: 50px 0 0 10px;
  font-size: 16px;
  float: right;
  :hover {
    background-color: #f0f0f0;
  }
`

export default TaskModal
