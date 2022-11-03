import styled from 'styled-components'
import ChangeModal from './ChangeModal'
import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { UserDataType } from './ModalEmploy'
import { getUserCommute } from '../../lib/getUserCommute'

interface PropsType {
  modal: number
  index: number
  setModal: Dispatch<SetStateAction<number>>
  user: UserDataType
  len: number
  setUser: (str: string) => void
  sortTask: Object
}

export interface WorkDataType {
  state: string | 'attendance | leave'
  message: string
  workingHour: number
  weeklyState: number
  timeFromAttendanceHour: number
  timeFromAttendanceMinute: number
}

function TimeSet({ modal, index, setModal, user, len, setUser,sortTask }: PropsType) {
  const [work, setwork] = useState<WorkDataType>({
    state: '',
    message: '',
    workingHour: 0,
    weeklyState: 0,
    timeFromAttendanceHour: 0,
    timeFromAttendanceMinute: 0
  })
  

  useEffect(() => {
    getUserCommute(user.userId).then(e => {
      setwork(e.data)
    })
  }, [])

  return (
    <div>
      {modal === index + 1 && (
        <_EmployModal
          lastChild={
            index > len - 7
              ? `-${(index - Array(12).length + 6) * 70 + 50}px`
              : ''
          }
        >
          <ChangeModal
            work={work}
            user={user}
            setWork={setwork}
            setUser={setUser}
            sortTask={sortTask}
          />
        </_EmployModal>
      )}
      <_EmployItem onClick={() => setModal(index + 1)}>
        <_EmployName>{user.nickname}</_EmployName>
        <_EmployWorkTime>
          {`${work.timeFromAttendanceHour}h ${work.timeFromAttendanceMinute}m`}
        </_EmployWorkTime>
        <_EmployWorking done={work.message !== 'attendance'}>
          {work.message}
        </_EmployWorking>
      </_EmployItem>
    </div>
  )
}

const _EmployItem = styled.div`
  display: flex;
  width: 700px;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f5f9;
  border-radius: 5px;
  padding: 5px 5px;

  position: relative;
  z-index: 1;
  margin: 10px 0;
  :hover {
    background-color: #dedfe1;
  }
  > span {
    font-size: 20px;
  }
`

const _EmployName = styled.div`
  width: 150px;
  font-size: 22px;
  padding: 5px 15px;
`

const _EmployWorking = styled.span<{ done: boolean }>`
  color: ${({ done }) => (done ? 'green' : 'red')};
  margin-right: 10px;
`

const _EmployModal = styled.div<{ lastChild: string }>`
  position: absolute;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 450px;
  background-color: white;
  border-radius: 5px;
  z-index: 2;
  margin-left: 160px;
  margin-top: ${({ lastChild }) => lastChild.length && lastChild};
  > div {
    width: 425px;
  }
`

const _EmployWorkTime = styled.span``

export default TimeSet
