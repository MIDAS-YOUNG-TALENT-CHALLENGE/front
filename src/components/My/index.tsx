import { useState } from 'react'
import useConfigData from '../../hooks/useConfigData'
import { Commits, MyInfo } from '../../types'
import * as S from './style'

const My = () => {
  const [hour, setHour] = useState<number | undefined>(0)
  useConfigData<MyInfo>({
    url: '/api/user/my',
    onSuccess: data => {
      setHour(data.totalWorkingHour)
    }
  })

  const [completed] = useConfigData<Commits[]>({
    url: 'api/task/commit'
  })

  return (
    <S.Wrapper>
      <S.Jubotron>
        <h1>총 근무한 시간은 {hour}시간입니다</h1>
      </S.Jubotron>

      <S.TaskWrapper>
        <S.TaskHeads>
          <S.TaskHead>상태</S.TaskHead>
          <S.TaskHead>제목</S.TaskHead>
          <S.TaskHead>장소</S.TaskHead>
        </S.TaskHeads>

        {completed?.map((i, idx) => (
          <S.Tasks key={idx}>
            <S.Task>{i.completed ? '완료' : '진행중'} </S.Task>
            <S.Task>{i.title}</S.Task>
            <S.Task>{i.location}</S.Task>
          </S.Tasks>
        ))}
      </S.TaskWrapper>
    </S.Wrapper>
  )
}

export default My
