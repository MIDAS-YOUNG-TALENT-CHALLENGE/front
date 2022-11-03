import { useMutation } from '../../hooks'
import { Task } from '../../types'
import * as S from './style'

interface Props {
  task: Task
  userId?: number
}

const Modal = ({ task, userId }: Props) => {
  const [taskStart] = useMutation({
    url: '/api/task/started',
    method: 'put',
    onSuccess: () => {
      window.location.reload()
    }
  })

  const [completed] = useMutation({
    url: '/api/task/completed',
    method: 'put',
    onSuccess: () => {
      window.location.reload()
    }
  })

  const onClick = async () => {
    await taskStart({ taskId: task.taskId, started: true })
  }

  return (
    <S.ModalWrapper onClick={e => e.stopPropagation()}>
      <div>
        <h2>{task.title}</h2>
        <p>업무 대상 : {task.mention?.nickname ?? '모두'}</p>
        <p>{task.description}</p>
      </div>
      <S.ModalButtons>
        {!task.started &&
          (task.mention === null || task.mention?.userId === userId) &&
          !task.completed && (
            <S.ModalButton type={'accept'} onClick={onClick}>
              수락
            </S.ModalButton>
          )}

        {task.started &&
          (task.mention?.userId === userId || task.mention === null) && (
            <>
              <S.ModalButton
                onClick={() =>
                  completed({ taskId: task.taskId, completed: true })
                }
                type={'accept'}
              >
                완료
              </S.ModalButton>
              <S.ModalButton type={'failure'}>실패</S.ModalButton>
            </>
          )}
      </S.ModalButtons>
    </S.ModalWrapper>
  )
}

export default Modal
