import * as S from './style'

const My = () => {
  return (
    <S.Wrapper>
      <S.Jubotron>
        <h1>총 근무한 시간은 6시간입니다</h1>
      </S.Jubotron>

      <S.TaskWrapper>
        <S.TaskHeads>
          <S.TaskHead>상태</S.TaskHead>
          <S.TaskHead>제목</S.TaskHead>
          <S.TaskHead>장소</S.TaskHead>
        </S.TaskHeads>
        <S.Tasks>
          <S.Task>완료</S.Task>
          <S.Task>도와주세요</S.Task>
          <S.Task>집</S.Task>
        </S.Tasks>

        <S.Tasks>
          <S.Task>완료</S.Task>
          <S.Task>도와주세요</S.Task>
          <S.Task>집</S.Task>
        </S.Tasks>

        <S.Tasks>
          <S.Task>완료</S.Task>
          <S.Task>도와주세요</S.Task>
          <S.Task>집</S.Task>
        </S.Tasks>

        <S.Tasks>
          <S.Task>완료</S.Task>
          <S.Task>도와주세요</S.Task>
          <S.Task>집</S.Task>
        </S.Tasks>
      </S.TaskWrapper>
    </S.Wrapper>
  )
}

export default My
