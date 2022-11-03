import { Task } from '../../types'
import * as S from './style'

interface Props {
  task: Task
}

const Modal = ({ task }: Props) => {
  console.log(task)
  return (
    <S.ModalWrapper onClick={e => e.stopPropagation()}>
      <div>
        <h2>{task.title}</h2>
        <p>업무 대상 : {task.mention?.nickname ?? '모두'}</p>
        <p>{task.description}</p>
      </div>
      <S.ModalButtons>
        {!task.started && <S.ModalButton type={'accept'}>수락</S.ModalButton>}

        <S.ModalButton type={'accept'}>완료</S.ModalButton>
        <S.ModalButton type={'failure'}>실패</S.ModalButton>
      </S.ModalButtons>
    </S.ModalWrapper>
  )
}

export default Modal
