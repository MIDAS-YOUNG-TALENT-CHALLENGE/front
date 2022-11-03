import { useState } from 'react'
import Portal from '../../portal'
import * as S from './style'
import Task from './Task'
import Modal from './Modal'
import { CommuteState } from '../../types'
import { useMutation } from '../../hooks'
import useConfigData from '../../hooks/useConfigData'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState<boolean>(false)
  const [state, setState] = useState<'attendance' | 'leave'>('leave')
  const [onCommute] = useMutation({
    url: '/api/commute/check',
    body: { state: 'attendance' },
    onSuccess: () => {
      setState(state === 'leave' ? 'attendance' : 'leave')
    }
  })

  useConfigData<CommuteState>({
    url: '/api/commute',
    onSuccess: data => {
      setState(data.state)
    },
    onFailure: () => {
      navigate('/login')
    }
  })

  return (
    <S.Wrapper>
      <S.Jubotron>
        <S.CommuteBtn onClick={onCommute}>
          {state === 'leave' ? '출근' : '퇴근'}
        </S.CommuteBtn>{' '}
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
