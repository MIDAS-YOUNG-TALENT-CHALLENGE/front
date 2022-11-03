import * as S from './style'
import Task from './Task'

const Admin = () => {
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
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </S.TaskList>
    </S.Wrapper>
  )
}

export default Admin
