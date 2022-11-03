import styled from 'styled-components'
import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
  KeyboardEvent
} from 'react'
import { makeTask } from '../../lib/makeTask'
import { TaskDataType } from './TaskList'

interface PropsType {
  modalTask: boolean
  setModal: Dispatch<SetStateAction<boolean>>
  setTask: Dispatch<SetStateAction<TaskDataType[]>>
  tasks: TaskDataType[]
}

export interface TaskerType {
  title: string
  location: string
  mention: number
  description: string
  important: number
}

const initial = {
  title: '',
  location: '',
  mention: 0,
  description: '',
  important: 0
}

function MakeTask({ modalTask, setModal, setTask, tasks }: PropsType) {
  const [tasker, setTasker] = useState<TaskerType>(initial)

  const onChanger = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name
    setTasker({ ...tasker, [name]: e.target.value })
  }

  const Off = () => setModal(false)

  const MakeIt = () => {
    try {
      makeTask(tasker).then()
      Off()
      setTask([ tasker, ...tasks ] as keyof SetStateAction<TaskDataType>)
      setTasker(initial)
    } catch (error) {}
  }

  return (
    <>
      {modalTask && (
        <>
          <_Background onClick={Off} />
          <_Wrapper>
            <_Location>
              <_TaskName
                placeholder="제목을 입력해 주세요."
                value={tasker.title}
                name="title"
                onChange={onChanger}
              />
              <_TaskContent
                placeholder="내용을 입력해 주세요."
                value={tasker.description}
                name="description"
                onChange={onChanger}
              />
              <_TaskFlexLine>
                <_TaskMention
                  placeholder="참가 인원의 유저 아이디를 적어주세요"
                  name="mention"
                  type="number"
                  onChange={onChanger}
                  value={tasker.mention}
                />
                <_TaskMention
                  placeholder="중요도를 입력해 주세요."
                  name="important"
                  type="number"
                  onChange={onChanger}
                  value={tasker.important}
                />
              </_TaskFlexLine>
              <_TaskMention
                placeholder="장소를 적어주세요"
                name="location"
                onChange={onChanger}
                value={tasker.location}
              />
              <_FixOrRemove onClick={MakeIt}>생성</_FixOrRemove>
            </_Location>
          </_Wrapper>
        </>
      )}
    </>
  )
}

const _Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 20%;
  z-index: 1;
`

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

const _TaskName = styled.input`
  font-size: 24px;
  font-weight: bold;
`

const _TaskContent = styled.textarea`
  font-size: 18px;
  height: 250px;
  width: 600px;

  margin: 10px 0;
  resize: none;
`

const _TaskFlexLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const _TaskMention = styled.input`
  font-weight: bold;
  font-size: 18px;
  width: 280px;
  margin-top: 5px;
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

export default MakeTask
