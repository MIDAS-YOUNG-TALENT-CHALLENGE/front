import { useState } from 'react'
import Portal from '../../portal'
import { Task as TaskType } from '../../types'
import Modal from './Modal'
import * as S from './style'

interface Props {
  task: TaskType
}

const Task = ({ task }: Props) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <S.Tasks onClick={() => setShow(true)}>
        <S.Task>{task.started ? '진행중' : '대기중'}</S.Task>
        <S.Task>{task.title}</S.Task>
        <S.Task>{task.mention?.nickname ?? '모두'}</S.Task>
        <S.Task>{task.location}</S.Task>
      </S.Tasks>

      {show && (
        <Portal onClose={() => setShow(false)}>
          <Modal task={task} />
        </Portal>
      )}
    </>
  )
}

export default Task
