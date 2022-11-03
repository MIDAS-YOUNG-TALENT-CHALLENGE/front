import styled from 'styled-components'
import EmployWorkList from './WorkListModal'
import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { WorkDataType } from './TimeState'
import { UserDataType } from './ModalEmploy'
import { changeLeave } from '../../lib/changeLeave'
import { changeName } from '../../lib/changeName'

interface PropsType {
  work: WorkDataType
  user: UserDataType
  setUser: (str: string) => void
  setWork: Dispatch<SetStateAction<WorkDataType>>
  sortTask: { [key: string]: any }
}

function ChangeModal({ work, user, setUser, setWork, sortTask }: PropsType) {
  const [revise, setVise] = useState(false)
  const [prework, setPreWork] = useState(work.state !== 'attendance')
  const [prename, setName] = useState(user.nickname)

  const workState = work.state !== 'attendance'

  const reviseCheck = () => {
    setVise(!revise)
    if (revise && workState !== prework) {
      try {
        changeLeave(prework ? 'attendance' : 'leave')
      } catch (e) {}
      setWork({ ...work, state: prework ? 'attendance' : 'leave' })
    }
    if (revise && prename !== user.nickname) {
      try {
        changeName(user.userId, prename)
      } catch (e) {}
      setUser(prename)
    }
  }

  const workChcnage = () => revise && setPreWork(!prework)
  const nameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)

  return (
    <>
      <div>
        <_ModalName>
          {revise ? (
            <ChangeInput onChange={nameChange} value={prename} />
          ) : (
            <div>{user.nickname}</div>
          )}
          <_WorkingCheck button={revise} leave={prework} onClick={workChcnage}>
            {prework ? '퇴근' : '출근'}
          </_WorkingCheck>
        </_ModalName>
        <_ModalEmail>{user.email}</_ModalEmail>
      </div>
      <EmployWorkList sortTask={sortTask[user.nickname]} />
      <_ReviseButton onClick={reviseCheck}>
        {revise ? '완료' : '수정'}
      </_ReviseButton>
    </>
  )
}

const _ModalName = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-top: 30px;
`

const _ModalEmail = styled.div`
  color: gray;
  font-size: 14px;
  margin-bottom: 20px;
`

const _ReviseButton = styled.button`
  outline: 0;
  width: 100px;
  height: 30px;
  border: 1px solid #48dbfb;
  background-color: white;
  border-radius: 5px;
  color: #48dbfb;
  margin: 10px 0 0 330px;
  font-size: 16px;
  font-weight: bold;
`

const _WorkingCheck = styled.button<{ button: boolean; leave: boolean }>`
  float: right;
  outline: 0;
  height: 30px;
  width: 50px;
  border-radius: 5px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  color: ${({ leave }) => (leave ? 'green' : 'red')};
  background-color: ${({ button }) => (button ? '#f0f0f0' : 'white')};
  :hover {
    background-color: ${({ button }) => button && 'gainsboro'};
  }
`

const ChangeInput = styled.input`
  width: 419px;
  font-size: 24px;
  font-weight: bold;
`

export default ChangeModal
