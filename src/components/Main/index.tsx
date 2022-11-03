import { useState } from 'react'
import * as S from './style'
import Task from './Task'
import {
  LeaveCommuteState,
  AttendanceCommuteState,
  MyInfo,
  Task as TaskType
} from '../../types'
import { useMutation } from '../../hooks'
import useConfigData from '../../hooks/useConfigData'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
  const [state, setState] = useState<'attendance' | 'leave'>('leave')
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [onCommute] = useMutation({
    url: '/api/commute/check',
    onSuccess: () => {
      setState(state === 'leave' ? 'attendance' : 'leave')
    }
  })

  useConfigData<AttendanceCommuteState | LeaveCommuteState>({
    url: '/api/commute',
    onSuccess: data => {
      setState(data.state)
    }
  })

  useConfigData<MyInfo>({
    url: '/api/user/my',
    onSuccess: data => {
      if (data.role === 'supervisor') navigate('/manage')
    },
    onFailure: () => {
      navigate('/login')
    }
  })

  useConfigData<TaskType[]>({
    url: '/api/task',
    onSuccess: data => {
      setTasks(data)
    }
  })

  return (
    <S.Wrapper>
      <S.Jubotron>
        <S.CommuteBtn
          style={{
            background: state === 'leave' ? '#bdc3c7' : '#23cf5f',
            boxShadow: `0 0 1rem ${state === 'leave' ? '#bdc3c7' : '#23cf5f'}`
          }}
          onClick={() =>
            onCommute({ state: state === 'leave' ? 'attendance' : 'leave' })
          }
        >
          {state === 'leave' ? '출근' : '퇴근'}하기
        </S.CommuteBtn>
      </S.Jubotron>
      <S.TaskList>
        <S.TaskHeads>
          <S.TaskHead>상태</S.TaskHead>
          <S.TaskHead>제목</S.TaskHead>
          <S.TaskHead>대상</S.TaskHead>
          <S.TaskHead>위치</S.TaskHead>
        </S.TaskHeads>
        {tasks.map(i => (
          <Task key={i.taskId} task={i} />
        ))}
      </S.TaskList>
    </S.Wrapper>
  )
}

export default Main
