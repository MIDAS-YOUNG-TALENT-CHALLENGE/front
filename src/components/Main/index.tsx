import { useState } from 'react'
import Portal from '../../portal'
import * as S from './style'
import Task from './Task'
import Modal from './Modal'
import { LeaveCommuteState, AttendanceCommuteState, MyInfo } from '../../types'
import { useMutation } from '../../hooks'
import useConfigData from '../../hooks/useConfigData'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState<boolean>(false)
  const [state, setState] = useState<'attendance' | 'leave'>('leave')
  const [onCommute] = useMutation({
    url: '/api/commute/check',
    onSuccess: () => {
      setState(state === 'leave' ? 'attendance' : 'leave')
    }
  })

  useConfigData<AttendanceCommuteState | LeaveCommuteState>({
    url: '/api/commute',
    onSuccess: data => {
      console.log(data)
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
        </S.TaskHeads>
        <Task onClick={() => setShow(true)} />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </S.TaskList>
      {show && (
        <Portal onClose={() => setShow(false)}>
          <Modal />
        </Portal>
      )}
    </S.Wrapper>
  )
}

export default Main
