import * as S from './style'

interface Props {
  onClick?: () => void
}

const Task = ({ onClick }: Props) => {
  return (
    <S.Tasks onClick={onClick}>
      <S.Task>진행중</S.Task>
      <S.Task>대충 업무내용</S.Task>
      <S.Task>모두</S.Task>
    </S.Tasks>
  )
}

export default Task
