import { useState } from 'react'
import * as S from './style'
import Task from './Task'
import { CommuteState, MyInfo, Task as TaskType } from '../../types'
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

  const [commute] = useConfigData<CommuteState>({
    url: '/api/commute',
    onSuccess: data => {
      setState(data.state)
    }
  })

  const [myInfo] = useConfigData<MyInfo>({
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
        {state === 'attendance' && (
          <S.TimeInfo>
            현재{' '}
            {`${commute?.timeFromAttendanceHour}시간 ${commute?.timeFromAttendanceMinute}분 근무 중입니다!`}
          </S.TimeInfo>
        )}
      </S.Jubotron>
      <S.TaskList>
        <S.TaskHeads>
          <S.TaskHead>상태</S.TaskHead>
          <S.TaskHead>제목</S.TaskHead>
          <S.TaskHead>대상</S.TaskHead>
          <S.TaskHead>위치</S.TaskHead>
        </S.TaskHeads>
        {tasks.map(i => (
          <Task key={i.taskId} task={i} userId={myInfo?.userId} />
        ))}
      </S.TaskList>
    </S.Wrapper>
  )
}

export default Main
