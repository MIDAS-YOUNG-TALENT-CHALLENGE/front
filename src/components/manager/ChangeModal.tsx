import styled from 'styled-components'
import EmployWorkList from './WorkListModal'
import { useState, ChangeEvent } from 'react'

function ChangeModal() {
  const [revise, setVise] = useState(false)
  const [work, setWork] = useState(false)

  const reviseCheck = () => setVise(!revise)
  const changeWork = () => revise && setWork(!work)

  const nameChange = (e: ChangeEvent<HTMLInputElement>) => {}

  return (
    <>
      <div>
        <_ModalName>
          {revise ? <ChangeInput onChange={nameChange} /> : <div>김태완</div>}
          <_WorkingCheck button={revise} leave={work} onClick={changeWork}>
            {work ? '퇴근' : '출근'}
          </_WorkingCheck>
        </_ModalName>
        <_ModalEmail>tao710803@gmail.com</_ModalEmail>
      </div>
      <EmployWorkList />
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
