import { useState } from 'react'
import Portal from '../../portal'
import * as S from './style'
import Task from './Task'
import Modal from './Modal'

const Admin = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <S.Jubotron>
        <S.CommuteBtn>출근</S.CommuteBtn>
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

export default Admin
