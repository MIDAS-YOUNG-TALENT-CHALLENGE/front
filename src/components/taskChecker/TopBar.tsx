import styled from 'styled-components'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

interface PropsType {
  setModal: Dispatch<SetStateAction<boolean>>
  taskLen: number
}

function TopBar({ setModal, taskLen }: PropsType) {
  const On = () => setModal(true)
  return (
    <_Wrapper>
      <_DepartWrap>
        총 <_DepartCode>{taskLen ? taskLen : '0'}개</_DepartCode>의 작업
      </_DepartWrap>
      <Link to="/manage">
        <_TaskMakerButton>직원 현황</_TaskMakerButton>
      </Link>

      <_TaskMakerButton onClick={On}>작업 만들기</_TaskMakerButton>
    </_Wrapper>
  )
}

const _Wrapper = styled.div`
  display: flex;
  position: fixed;
  right: -5%;
  top: 20%;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 800px;
`

const _TaskMakerButton = styled.button`
  outline: 0;
  width: 180px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  color: #48dbfb;
  border: 2px solid #48dbfb;
  border-radius: 5px;
  background-color: white;
  margin-top: 20px;
  cursor: pointer;
`

const _DepartWrap = styled.span`
  font-size: 24px;
`

const _DepartCode = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #48dbfb;
`

export default TopBar
